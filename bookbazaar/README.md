# BookBazaar — React Native (Expo) Book Finder

BookBazaar is an intermediate React Native app (Expo) that demonstrates navigation, API integration (Google Books API), authentication context, favorites persisted to AsyncStorage, and a clean project structure — perfect for a 5-minute code walkthrough assessment.

---

## Visual output (placeholder images)
Replace these with real screenshots from your device/emulator before final submission.

### Home / Search
![Home]({}/assets/screenshots/home.png)

### Search UI
![Search]({}/assets/screenshots/search.png)

### Book Detail
![Detail]({}/assets/screenshots/detail.png)

### Favorites
![Favorites]({}/assets/screenshots/favorites.png)

---

## Quick start

```bash
# 1. unzip and open folder
unzip bookbazaar.zip
cd bookbazaar

# 2. install dependencies
npm install

# 3. start (Expo)
npm start
```

Open in Expo Go or emulator.

---

## What to show in a 5-minute walkthrough

- Intro (what problem it solves)  
- Project structure & main flows (`App.js`, `AuthContext`, `AppNavigator`)  
- Code walkthrough: `HomeScreen`, `BookCard`, `BookDetail`, `favorites` storage, `services/api.js`  
- Discuss technical debt and improvements (error handling, pagination, tests)  
- Deployment notes (Expo/EAS)

---

## Folder structure

```
src/
├── navigation/
│   └── AppNavigator.js
├── screens/
│   ├── LoginScreen.js
│   ├── HomeScreen.js
│   ├── BookDetailScreen.js
│   ├── FavoritesScreen.js
│   └── ProfileScreen.js
├── components/
│   └── BookCard.js
├── context/
│   └── AuthContext.js
├── services/
│   └── api.js
└── storage/
    └── favorites.js
```

---

## Notes
- The README images are embedded as PNGs under `assets/screenshots/` so they render on GitHub. After recording your Loom, replace placeholders with real screenshots exported from your device/emulator.
- If you want, I can also generate a polished 5-minute verbatim script tailored to these exact filenames for you to read while recording.
