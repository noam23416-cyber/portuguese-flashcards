# 🇧🇷 פורטוגזית בכרטיסיות — Português em Flashcards

אפליקציית לימוד פורטוגזית (ברזילאית) בסטייל כרטיסיות מתחלפות, בעברית/אנגלית/פורטוגזית,
עם הגייה קולית, שמתאימה גם לאייפון (ניתן "להתקין" אותה כאפליקציה מהדפדפן).

A fast, Duolingo-style flashcard app for learning **Brazilian Portuguese**.
Content is shown in Hebrew, English and Portuguese together, with spoken
native-accent pronunciation for every word/phrase. No build step, no
backend, no API keys — pure HTML/CSS/JS, so it's simple to host on GitHub
Pages and use straight from an iPhone.

## Features

- 🗂️ 25 lessons × 10 cards = **250 words & phrases**, grouped into 5
  levels of increasing difficulty (Basics → Daily Life → Verbs &
  Descriptions → Conversation → Advanced).
- 🔊 Native-accent pronunciation on every card, via the browser's built-in
  Brazilian Portuguese voice (no audio files needed).
- 🔁 Tap to flip a card (Portuguese front → Hebrew + English back), swipe
  or use the buttons to move between cards.
- 🔒 Lessons unlock in order, so difficulty progresses naturally.
- 🔥 Daily streak counter and per-level progress bars, saved on your
  device (`localStorage` — nothing is sent anywhere).
- 📱 Mobile-first design, installable on iPhone ("Add to Home Screen")
  and works offline afterwards thanks to a small service worker.

## Running it locally

Because of the service worker, it's best to serve the files over `http://`
rather than opening `index.html` directly with `file://`. From this folder:

```bash
python3 -m http.server 8000
# then open http://localhost:8000 in your browser
```

(Opening `index.html` directly also mostly works — you'll just lose the
offline/service-worker caching.)

## Putting it on GitHub & using it on your iPhone

1. Create a new repository on GitHub (e.g. `portuguese-flashcards`).
2. Push this folder to it:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Portuguese flashcards app"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo>.git
   git push -u origin main
   ```
3. In the repo settings, enable **GitHub Pages** (Settings → Pages →
   Deploy from branch → `main` → `/ (root)`).
4. GitHub will give you a URL like
   `https://<your-username>.github.io/<your-repo>/`. Open that on your
   iPhone in Safari.
5. Tap the **Share** button → **Add to Home Screen**. The app now opens
   full-screen with its own icon, like a native app.

> A real git repo and an initial commit were already created for you in
> this folder — you only need steps 1 and the `remote add` / `push` parts
> above.

## How pronunciation works

The app uses the **Web Speech API** (`speechSynthesis`), which is built
into Safari/iOS and Chrome. It picks a `pt-BR` voice if the device has
one installed (iPhones do, out of the box) and reads each word/phrase at
a slightly slower rate for clarity. This is a real text-to-speech voice,
not a human recording — quality is generally very good for Brazilian
Portuguese on iOS, but it isn't identical to a native speaker.

Tip: if no sound plays the very first time, tap the 🔊 button once — iOS
sometimes requires a direct tap before it allows audio.

## Adding more content

All vocabulary lives in `data.js`:

- `LEVELS` — defines the 5 levels and which lesson IDs belong to each.
- `LESSONS` — one object per lesson, each with a `title` (`he`/`en`) and
  a `cards` array of `{ pt, he, en }` objects.

To add a new lesson:
1. Add a new object to `LESSONS` with a unique `id`, a `level`, a title,
   and ~10 cards.
2. Add that `id` to the right level's `lessons` array in `LEVELS` (or
   create a new level).

No other code changes are needed — the home screen and progress/lock
logic are generated automatically from these two arrays.

## Project structure

```
index.html      – app shell / screens
style.css       – mobile-first styling, card-flip animation
app.js          – navigation, flashcard logic, TTS, progress tracking
data.js         – all lesson/vocabulary content (edit this to expand)
manifest.json   – PWA manifest (name, icons, colors)
sw.js           – service worker for offline caching
icons/          – app icons (192px, 512px)
```

## Notes / possible future improvements

- Content currently covers ~250 core words & phrases; the structure in
  `data.js` makes it easy to keep growing it level by level.
- Recording/pronunciation-scoring was intentionally left out per request
  — this version only plays native-accent audio for you to repeat out
  loud.
- Everything runs client-side; progress is per-device/per-browser (it
  will not sync across your phone and laptop unless you add a backend).
