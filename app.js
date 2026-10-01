// ===================================================================
// App logic: navigation, flashcards, TTS pronunciation, progress
// ===================================================================

const STORAGE_KEY = "pt_app_progress_v1";

function defaultProgress() {
  return {
    completedLessons: [],
    unknownCards: [], // keys "lessonId::pt" for individual cards marked "I didn't know this"
    streak: 0,
    lastStudyDate: null,
    activeCategory: "words"
  };
}

function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultProgress();
    return Object.assign(defaultProgress(), JSON.parse(raw));
  } catch (e) {
    return defaultProgress();
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

// Lessons unlock sequentially, but separately per category ("words" vs
// "numbers") — e.g. the first numbers lesson is always unlocked even if
// no words lessons have been completed yet, and vice versa.
function categoryOfLesson(lessonId) {
  const lvl = LEVELS.find(l => l.lessons.includes(lessonId));
  return lvl ? lvl.category : "words";
}

function categoryLessonOrder(category) {
  return LEVELS.filter(l => l.category === category).flatMap(l => l.lessons);
}

function isLessonUnlocked(lessonId) {
  const order = categoryLessonOrder(categoryOfLesson(lessonId));
  const idx = order.indexOf(lessonId);
  if (idx <= 0) return true;
  return progress.completedLessons.includes(order[idx - 1]);
}

function isLessonDone(lessonId) {
  return progress.completedLessons.includes(lessonId);
}

// ---------------- Per-card "I didn't know this" marking ----------------
// Cards are identified by "<lessonId>::<pt text>" so marks survive content
// reordering as long as the Portuguese text itself doesn't change.
function cardKey(lessonId, card) {
  return lessonId + "::" + card.pt;
}

// A card carries its origin lesson id as "_origLessonId" once it's been
// pulled into a review session (so marking still points back to the
// lesson it actually came from, even inside a cross-lesson review mix).
function originLessonId(card) {
  if (card._origLessonId !== undefined && card._origLessonId !== null) {
    return card._origLessonId;
  }
  return currentLesson ? currentLesson.id : null;
}

function isCardUnknown(card) {
  return progress.unknownCards.includes(cardKey(originLessonId(card), card));
}

function toggleCardUnknown(card) {
  const key = cardKey(originLessonId(card), card);
  const idx = progress.unknownCards.indexOf(key);
  if (idx === -1) {
    progress.unknownCards.push(key);
  } else {
    progress.unknownCards.splice(idx, 1);
  }
  saveProgress(progress);
}

// Tags each card in a list with its current origin lesson id, so the tag
// survives being carried into a review session (where currentLesson.id
// changes to "review").
function withOrigin(cards) {
  return cards.map(c => Object.assign({}, c, { _origLessonId: originLessonId(c) }));
}

// Resolves every globally-marked-unknown card back to a real card object,
// across all lessons, for the home-screen "practice unknown words" entry.
function getAllUnknownCardObjects() {
  const result = [];
  progress.unknownCards.forEach(key => {
    const sep = key.indexOf("::");
    if (sep === -1) return;
    const lessonId = Number(key.slice(0, sep));
    const pt = key.slice(sep + 2);
    const lesson = LESSONS.find(l => l.id === lessonId);
    if (!lesson) return;
    const card = lesson.cards.find(c => c.pt === pt);
    if (!card) return;
    result.push(Object.assign({}, card, { _origLessonId: lessonId }));
  });
  return result;
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
const CATEGORY_LABELS = {
  words: { he: "📚 מילים", en: "Words" },
  numbers: { he: "🔢 מספרים", en: "Numbers" },
  sentences: { he: "✍️ השלמת משפטים", en: "Sentences" }
};

function setActiveCategory(category) {
  progress.activeCategory = category;
  saveProgress(progress);
  renderHome();
}

function renderCategoryTabs() {
  const tabsEl = document.getElementById("category-tabs");
  tabsEl.innerHTML = "";
  Object.keys(CATEGORY_LABELS).forEach(cat => {
    const btn = document.createElement("button");
    btn.className = "tab-btn" + (progress.activeCategory === cat ? " active" : "");
    btn.textContent = CATEGORY_LABELS[cat].he;
    btn.addEventListener("click", () => setActiveCategory(cat));
    tabsEl.appendChild(btn);
  });
}

function renderHome() {
  document.getElementById("streak-count").textContent = progress.streak || 0;
  renderCategoryTabs();

  const unknownBtn = document.getElementById("unknown-words-btn");
  const totalUnknown = progress.unknownCards.length;
  if (totalUnknown > 0) {
    unknownBtn.style.display = "block";
    unknownBtn.textContent =
      `🏳️ תרגל ${totalUnknown} מילים שלא ידעת / Practice ${totalUnknown} unknown words`;
  } else {
    unknownBtn.style.display = "none";
  }

  const container = document.getElementById("levels-container");
  container.innerHTML = "";

  LEVELS.filter(level => level.category === progress.activeCategory).forEach(level => {
    const doneCount = level.lessons.filter(id => isLessonDone(id)).length;
    const total = level.lessons.length;
    const cardCount = level.lessons.reduce((sum, id) => {
      const lesson = LESSONS.find(l => l.id === id);
      return sum + (lesson ? lesson.cards.length : 0);
    }, 0);

    const block = document.createElement("div");
    block.className = "level-block";

    const title = document.createElement("div");
    title.className = "level-title";
    title.innerHTML = `<span>${level.title.he} · ${cardCount} כרטיסיות</span>
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
      btn.className = "lesson-chip" +
        (!unlocked ? " locked" : "") +
        (done ? " done" : "");
      const badge = done ? "✓" : (unlocked ? idx + 1 : "🔒");
      const topicLabel = lesson.short || lesson.title.he;
      btn.innerHTML = `<span class="chip-num">${badge}</span><span class="chip-topic">${topicLabel}</span>`;
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
let isReviewMode = false; // true while practicing a dynamically-built "unknown words" set
let pendingReviewCards = []; // cards offered on the complete screen's review button

function openLesson(lessonId) {
  currentLesson = LESSONS.find(l => l.id === lessonId);
  isReviewMode = false;
  currentIndex = 0;
  showScreen("screen-lesson");
  renderCard();
}

// Starts a practice session built from an arbitrary list of cards (e.g.
// the ones just marked "didn't know this") instead of a fixed lesson.
// Cards must already carry a usable origin lesson id (see withOrigin /
// getAllUnknownCardObjects) so marking still works correctly inside it.
function startReviewSession(cards, titleHe, titleEn) {
  currentLesson = { id: "review", title: { he: titleHe, en: titleEn }, cards: cards };
  isReviewMode = true;
  currentIndex = 0;
  showScreen("screen-lesson");
  renderCard();
}

function restartCurrentSession() {
  if (isReviewMode) {
    startReviewSession(currentLesson.cards, currentLesson.title.he, currentLesson.title.en);
  } else {
    openLesson(currentLesson.id);
  }
}

function renderCard() {
  const card = currentLesson.cards[currentIndex];
  isFlipped = false;
  const flashcard = document.getElementById("flashcard");

  // Snap back to the front face instantly (no flip animation) when a new
  // card is shown, so the new word never briefly flashes its translation
  // mid-spin. "no-anim" temporarily disables the CSS transition.
  flashcard.classList.add("no-anim");
  flashcard.classList.remove("flipped");

  document.getElementById("pt-word").textContent = card.pt;
  document.getElementById("back-he").textContent = card.he;
  document.getElementById("back-en").textContent = card.en;
  document.getElementById("back-pt").textContent = card.full || card.pt;

  document.getElementById("card-counter").textContent =
    `${currentIndex + 1} / ${currentLesson.cards.length}`;
  const pct = ((currentIndex + 1) / currentLesson.cards.length) * 100;
  document.getElementById("lesson-progress-fill").style.width = pct + "%";

  document.getElementById("prev-card-btn").disabled = currentIndex === 0;
  updateNextButtonLabel();
  updateUnknownBtn();

  // re-enable the flip animation on the next frame, after the instant
  // snap-back above has already taken effect
  requestAnimationFrame(() => flashcard.classList.remove("no-anim"));

  // Auto-play pronunciation when a new card appears — but for a
  // fill-in-the-blank sentence (card.full set), there's nothing sensible
  // to read aloud until it's revealed, so we wait for the flip instead.
  if (!card.full) {
    speakPortuguese(card.pt);
  }
}

function updateUnknownBtn() {
  const card = currentLesson.cards[currentIndex];
  document.getElementById("mark-unknown-btn").classList.toggle("active", isCardUnknown(card));
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

  // Fill-in-the-blank cards: speak the completed sentence once revealed.
  const card = currentLesson.cards[currentIndex];
  if (isFlipped && card.full) {
    speakPortuguese(card.full);
  }
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
  if (!isReviewMode) {
    if (!progress.completedLessons.includes(currentLesson.id)) {
      progress.completedLessons.push(currentLesson.id);
    }
    bumpStreak();
    saveProgress(progress);
  }

  document.getElementById("complete-lesson-title").textContent =
    `${currentLesson.title.he} · ${currentLesson.title.en}`;

  // Offer to immediately practice just the cards marked "didn't know
  // this" during the session that was just finished.
  pendingReviewCards = withOrigin(currentLesson.cards.filter(c => isCardUnknown(c)));
  const reviewBtn = document.getElementById("complete-review-btn");
  if (pendingReviewCards.length > 0) {
    reviewBtn.style.display = "block";
    reviewBtn.textContent =
      `🏳️ תרגל ${pendingReviewCards.length} מילים שלא ידעת / Practice unknown words`;
  } else {
    reviewBtn.style.display = "none";
  }

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
    if (!currentLesson) return;
    const card = currentLesson.cards[currentIndex];
    speakPortuguese(card.full || card.pt);
  });
  document.getElementById("mark-unknown-btn").addEventListener("click", () => {
    if (!currentLesson) return;
    toggleCardUnknown(currentLesson.cards[currentIndex]);
    updateUnknownBtn();
  });
  document.getElementById("unknown-words-btn").addEventListener("click", () => {
    const cards = getAllUnknownCardObjects();
    if (cards.length === 0) return;
    startReviewSession(cards, "מילים שלא ידעת", "Words you didn't know");
  });
  document.getElementById("back-btn").addEventListener("click", () => {
    window.speechSynthesis && window.speechSynthesis.cancel();
    renderHome();
    showScreen("screen-home");
  });
  document.getElementById("complete-repeat-btn").addEventListener("click", () => {
    restartCurrentSession();
  });
  document.getElementById("complete-review-btn").addEventListener("click", () => {
    const titleHe = `${currentLesson.title.he} – תרגול`;
    const titleEn = `${currentLesson.title.en} – Review`;
    startReviewSession(pendingReviewCards, titleHe, titleEn);
  });
  document.getElementById("complete-continue-btn").addEventListener("click", () => {
    renderHome();
    showScreen("screen-home");
  });
  document.getElementById("reset-progress-btn").addEventListener("click", () => {
    if (confirm("לאפס את כל ההתקדמות? / Reset all progress?")) {
      const keepCategory = progress.activeCategory;
      progress = defaultProgress();
      progress.activeCategory = keepCategory;
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
