# GlowCart

GlowCart is a minimal beauty e-commerce mobile app built with **React Native CLI**.  
It replicates a cosmetic store’s user experience, with clean UI, smooth navigation, and dynamic data fetching from an open API.

---

## 📱 Screens Included
1. **Onboarding Screen** — Logo, tagline, and "Get Started" button.  
2. **Login Screen** — Email/password fields, login button, register link, optional social login UI.  
3. **Register Screen** — User details input, account creation button, login link.  
4. **Home/Product List Screen** — Fetches and displays product list with image, title, and price.  
5. **Product Details Screen** — Large image, description, highlights, reviews, and "Add to Bag" button.  
6. **Profile Screen** — Mock user info, settings/options, logout.

---

## 🛠 Tech Stack
- **React Native CLI** — Mobile app framework
- **React Navigation** — Screen navigation
- **Axios** — API requests
- **Tailwind-rn** — Clean and fast styling
- **Context API** — Global state management
- **DummyJSON API** — Product data source ([dummyjson.com/products](https://dummyjson.com/products))

---

## 🚀 How to Run Locally

**Prerequisites:**
- Node.js & npm
- Android Studio (with SDK installed)
- React Native CLI

**Steps:**
```bash
# Clone this repository
git clone https://github.com/rohit1221330/Assignment.git

# Go into the project folder
cd Assignment

# Install dependencies
npm install

# Start Metro bundler
npx react-native start

# In another terminal, run the app on Android
npx react-native run-android
