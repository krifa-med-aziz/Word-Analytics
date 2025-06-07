# WORD-ANALYTICS

_Transforming words into insights, effortlessly and effectively._

![Last Commit](https://img.shields.io/github/last-commit/krifa-med-aziz/Word-Analytics)
![Languages](https://img.shields.io/github/languages/count/krifa-med-aziz/Word-Analytics)
![Top Language](https://img.shields.io/github/languages/top/krifa-med-aziz/Word-Analytics)

_Built with the tools and technologies:_

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![React](https://img.shields.io/badge/React-20232a?logo=react&logoColor=61dafb)
![Vite](https://img.shields.io/badge/Vite-646cff?logo=vite&logoColor=white)
![JSON](https://img.shields.io/badge/JSON-000000?logo=json&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B32C3?logo=eslint&logoColor=white)
![npm](https://img.shields.io/badge/npm-CB3837?logo=npm&logoColor=white)

---

## Table of Contents

- [Overview](#overview)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)

---

## Overview

🚀 **Word-Analytics** is a powerful and intuitive developer tool that helps you analyze and visualize text-related data, making it easier to optimize content for social media platforms and beyond.

✨ **Why Word-Analytics?**

- 📱 **Responsive Design** – Ensures smooth experience across devices.
- 🧹 **Clean Code** – Follows ESLint guidelines for maintainable structure.
- ⚡ **Modern Tooling** – Built with Vite for fast development and build time.
- 🧠 **User-Friendly** – Displays word/character counts and alerts for limits.
- 🔁 **Centralized Constants** – Easily update thresholds like character limits.
- 🎨 **Aesthetic UI** – Clean and minimal design with reusable components.

---

## Getting Started

### Prerequisites

Ensure you have the following installed:

- **Programming Language**: JavaScript (ES6+)
- **Runtime**: [Node.js](https://nodejs.org/) (v14 or higher)
- **Package Manager**: npm (comes with Node.js)

---

### Installation

1. **Clone the repository**:

```bash
git clone https://github.com/krifa-med-aziz/Word-Analytics
```

2. **Navigate into the project directory**:

```bash
cd Word-Analytics
```

3. **Install all dependencies**:

```bash
npm install
```

4. **Start the development server**:

```bash
npm run dev
```

The app will be available at `http://localhost:5173/` (default Vite port).

---

## Usage

After installation:

- Use the word/character counter by typing into the input field.
- Visual indicators and messages will help you stay within platform-specific limits (e.g., Twitter).
- Easily customizable for different platforms or thresholds using the constants file.

📦 To build for production:

```bash
npm run build
```

🌐 To preview the production build locally:

```bash
npm run preview
```

---

## Testing

🔧 Currently, no automated tests are implemented.

To test manually:

- Run the development server: `npm run dev`
- Try inputting various lengths of text.
- Confirm that:
  - Word and character counts update live.
  - Warnings appear when limits are exceeded.
  - Layout works on different screen sizes.

✅ (Optional) You can integrate testing tools like **Jest**, **React Testing Library**, or **Cypress** in the future.

---

> _Made with 💙 by [krifa-med-aziz](https://github.com/krifa-med-aziz)_
