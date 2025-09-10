📚 BookBazaar

"BookBazaar" is a React Native app for browsing books, managing favorites, and handling authentication. It demonstrates "auth, navigation, API integration, state management with AsyncStorage", and a clean project architecture 
---

 🚀 Features

* User Authentication (Login / Register / Logout)
* Navigation with React Navigation
* API Integration: Fetch books from a remote API
* Favorites: Save favorite books locally using AsyncStorage
* Clean Architecture: Separate folders for screens, context, navigation, and services
* State Management using Context API

---

 🗂 Project Structure


BookBazaar/
├─ App.js                  # Entry point
├─ navigation/
│   └─ AppNavigator.js     # Handles navigation flow
├─ context/
│   └─ AuthContext.js      # Authentication & global state
├─ screens/
│   ├─ HomeScreen.js       # Shows list of books
│   ├─ BookDetailScreen.js # Book details & favorites
│   └─ AuthScreens/        # Login / Register screens
├─ services/
│   └─ api.js              # API calls
├─ package.json
└─ ...


---

⚡ Installation

1. Clone the repository

$bash
git clone https://github.com/Abhinayvalluri1234/BookBazaar.git
cd BookBazaar

2. Install dependencies

$bash
npm install
 or
yarn install

3. Run the app

$bash
npm start
 or
yarn start


* Open the app in "Android Emulator", "iOS Simulator", or "physical device" using Expo/Metro.

---

 🔧 Usage

1. Register or Login – New users can register; existing users can login.
2. Browse Books – Home screen fetches books from the API in real time.
3. View Book Details – Click a book to see details and add it to **Favorites**.
4. Favorites  – Favorites are persisted locally using AsyncStorage.

---

 📱 Technologies Used

* React Native
* React Navigation
* Context API (State Management)
* AsyncStorage (Local Storage)
* Axios / Fetch  (API Calls)

---

📝 Notes

* Replace the API URL in `services/api.js` with your backend or public API.
* The app follows a **clean folder structure** for maintainability and scalability.

---

