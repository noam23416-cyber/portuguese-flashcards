// ===================================================================
// App logic: navigation, flashcards, TTS pronunciation, progress
// ===================================================================

const STORAGE_KEY = "pt_app_progress_v1";

function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { completedLessons: [], streak: 0, lastStudyDate: null };
    return JSON.parse(raw);
  } catch (e) {
    return { completedLessons: [], streak: 0, lastStudyDate: null };
  }
}

function saveProgress(progress) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (e) { /* ignore (private browsing etc.) */ }
}

let progress = loadProgress();

function todayStr() {
  return new Date().toISOString().slice(0, 10);
}

function bumpStreak() {
  const today = todayStr();
  if (progress.lastStudyDate === today) return; // already counted today
  const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
  if (progress.lastStudyDate === yesterday) {
    progress.streak = (progress.streak || 0) + 1;
  } else {
    progress.streak = 1;
  }
  progress.lastStudyDate = today;
  saveProgress(progress);
}

function isLessonUnlocked(lessonId) {
  if (lessonId === 1) return true;
  return progress.completedLessons.includes(lessonId - 1);
}

function isLessonDone(lessonId) {
  return progress.completedLessons.includes(lessonId);
}

// ---------------- Screen navigation ----------------
function showScreen(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

// ---------------- TTS (native Brazilian Portuguese pronunciation) ----------------
let ptVoice = null;

function pickPtVoice() {
  if (!("speechSynthesis" in window)) return;
  const voices = window.speechSynthesis.getVoices();
  if (!voices || voices.length === 0) return;
  ptVoice =
    voices.find(v => v.lang === "pt-BR") ||
    voices.find(v => v.lang && v.lang.toLowerCase().startsWith("pt")) ||
    null;
}

if ("speechSynthesis" in window) {
  pickPtVoice();
  window.speechSynthesis.onvoiceschanged = pickPtVoice;
}

function speakPortuguese(text) {
  if (!("speechSynthesis" in window)) return;
  try {
    window.speechSynthesis.cancel(); // stop anything currently playing
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = "pt-BR";
    if (ptVoice) utter.voice = ptVoice;
    utter.rate = 0.92;
    window.speechSynthesis.speak(utter);
  } catch (e) { /* speech not available */ }
}

// ---------------- Home screen rendering ----------------
function renderHome() {
  document.getElementById("streak-count").textContent = progress.streak || 0;

  const container = document.getElementById("levels-container");
  container.innerHTML = "";

  LEVELS.forEach(level => {
    const doneCount = level.lessons.filter(id => isLessonDone(id)).length;
    const total = level.lessons.length;

    const block = document.createElement("div");
    block.className = "level-block";

    const title = document.createElement("div");
    title.className = "level-title";
    title.innerHTML = `<span>${level.title.he} · ${total * 10} מילים</span>
      <span class="level-sub">${level.title.en}</span>`;
    block.appendChild(title);

    const track = document.createElement("div");
    track.className = "level-progress-track";
    const fill = document.createElement("div");
    fill.className = "level-progress-fill";
    fill.style.width = `${(doneCount / total) * 100}%`;
    track.appendChild(fill);
    block.appendChild(track);

    const grid = document.createElement("div");
    grid.className = "lesson-grid";

    level.lessons.forEach((lessonId, idx) => {
      const lesson = LESSONS.find(l => l.id === lessonId);
      const btn = document.createElement("button");
      const unlocked = isLessonUnlocked(lessonId);
      const done = isLessonDone(lessonId);
      btn.className = "lesson-chip" + (!unlocked ? " locked" : "") + (done ? " done" : "");
      btn.innerHTML = `<span class="chip-num">${done ? "✓" : idx + 1}</span>`;
      btn.title = `${lesson.title.he} / ${lesson.title.en}`;
      if (unlocked) {
        btn.addEventListener("click", () => openLesson(lessonId));
      }
      grid.appendChild(btn);
    });

    block.appendChild(grid);
    container.appendChild(block);
  });
}

// ---------------- Lesson screen ----------------
let currentLesson = null;
let currentIndex = 0;
let isFlipped = false;

function openLesson(lessonId) {
  currentLesson = LESSONS.find(l => l.id === lessonId);
  currentIndex = 0;
  showScreen("screen-lesson");
  renderCard();
}

function renderCard() {
  const card = currentLesson.cards[currentIndex];
  isFlipped = false;
  const flashcard = document.getElementById("flashcard");
  flashcard.classList.remove("flipped");

  document.getElementById("pt-word").textContent = card.pt;
  document.getElementById("back-he").textContent = card.he;
  document.getElementById("back-en").textContent = card.en;
  document.getElementById("back-pt").textContent = card.pt;

  document.getElementById("card-counter").textContent =
    `${currentIndex + 1} / ${currentLesson.cards.length}`;
  const pct = ((currentIndex + 1) / currentLesson.cards.length) * 100;
  document.getElementById("lesson-progress-fill").style.width = pct + "%";

  document.getElementById("prev-card-btn").disabled = currentIndex === 0;
  updateNextButtonLabel();

  // auto-play pronunciation when a new card appears
  speakPortuguese(card.pt);
}

function updateNextButtonLabel() {
  const nextBtn = document.getElementById("next-card-btn");
  const isLast = currentIndex === currentLesson.cards.length - 1;
  if (!isFlipped) {
    nextBtn.textContent = "הצג תרגום";
  } else {
    nextBtn.textContent = isLast ? "סיום ✓" : "הבא ▷";
  }
}

function flipCard() {
  isFlipped = !isFlipped;
  document.getElementById("flashcard").classList.toggle("flipped", isFlipped);
  updateNextButtonLabel();
}

// Pressing "next" first flips the card to reveal the translation; only a
// second press (once the translation is already showing) moves on to the
// next card / finishes the lesson.
function nextCard() {
  if (!isFlipped) {
    flipCard();
    return;
  }
  if (currentIndex < currentLesson.cards.length - 1) {
    currentIndex++;
    renderCard();
  } else {
    finishLesson();
  }
}

function prevCard() {
  if (currentIndex > 0) {
    currentIndex--;
    renderCard();
  }
}

function finishLesson() {
  if (!progress.completedLessons.includes(currentLesson.id)) {
    progress.completedLessons.push(currentLesson.id);
  }
  bumpStreak();
  saveProgress(progress);

  document.getElementById("complete-lesson-title").textContent =
    `${currentLesson.title.he} · ${currentLesson.title.en}`;
  showScreen("screen-complete");
}

// ---------------- Swipe gestures ----------------
function setupSwipe(el, onSwipeLeft, onSwipeRight) {
  let startX = null;
  el.addEventListener("touchstart", e => { startX = e.touches[0].clientX; }, { passive: true });
  el.addEventListener("touchend", e => {
    if (startX === null) return;
    const dx = e.changedTouches[0].clientX - startX;
    if (Math.abs(dx) > 50) {
      if (dx < 0) onSwipeLeft(); else onSwipeRight();
    }
    startX = null;
  }, { passive: true });
}

// ---------------- Wire up events ----------------
document.addEventListener("DOMContentLoaded", () => {
  renderHome();

  document.getElementById("flashcard").addEventListener("click", flipCard);
  document.getElementById("next-card-btn").addEventListener("click", nextCard);
  document.getElementById("prev-card-btn").addEventListener("click", prevCard);
  document.getElementById("replay-audio-btn").addEventListener("click", () => {
    if (currentLesson) speakPortuguese(currentLesson.cards[currentIndex].pt);
  });
  document.getElementById("back-btn").addEventListener("click", () => {
    window.speechSynthesis && window.speechSynthesis.cancel();
    renderHome();
    showScreen("screen-home");
  });
  document.getElementById("complete-repeat-btn").addEventListener("click", () => {
    openLesson(currentLesson.id);
  });
  document.getElementById("complete-continue-btn").addEventListener("click", () => {
    renderHome();
    showScreen("screen-home");
  });
  document.getElementById("reset-progress-btn").addEventListener("click", () => {
    if (confirm("לאפס את כל ההתקדמות? / Reset all progress?")) {
      progress = { completedLessons: [], streak: 0, lastStudyDate: null };
      saveProgress(progress);
      renderHome();
    }
  });

  setupSwipe(document.getElementById("screen-lesson"), nextCard, prevCard);

  // Register service worker for offline use (PWA on iPhone)
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  }
});
