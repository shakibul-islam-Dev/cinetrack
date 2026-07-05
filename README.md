# CineTrack - Movie Watchlist & Review Interface

CineTrack is a highly functional, responsive, and minimalist client-side web application built with React.js. It allows users to manage a dynamic list of movies, toggle their watched status, filter views, and perform client-side operations smoothly without needing a backend.

## 🚀 Features

- **Dashboard View:** A clean, responsive grid layout displaying movie cards with Title, Genre, Release Year, and Poster.
- **Add New Movie:** A structured form with client-side validation to prevent empty inputs or invalid submission patterns.
- **Interactive Controls:** - Real-time search functionality by movie title.
  - Status filters to view "All", "Watched", or "Unwatched" movies.
- **State Persistence:** Uses standard browser storage (`localStorage`) to save your watchlist data automatically.
- **UI Feedback:** Implements an artificial asynchronous delay featuring a modern skeleton loading state during initial rendering.

## 🛠️ Technical Stack

- **Framework:** React.js
- **Styling:** Tailwind CSS (or Standard CSS)
- **Data Management:** Local Storage & React State Hooks (`useState`, `useEffect`)

---

## 💻 Local Environment Setup

Follow these explicit step-by-step instructions to get the project running on your local machine.

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your computer.

### Step 1: Clone the Repository

Open your terminal (e.g., Git Bash, Command Prompt, or VS Code terminal) and clone the repository:

```bash
git clone https://github.com/shakibul-islam-Dev/cinetrack

Step 2: Navigate to the Project Directory
Change your current working directory to the project folder:

Bash
cd cd cine_track

Step 3: Install Dependencies
Run the following command to download and install all the required packages and dependencies:

Bash
npm install
Step 4: Launch the Local Development Server
Once the installation is complete, start the application by running:

Bash
npm run dev
(Note: If you bootstrapped the project using Create React App instead of Vite, use npm start instead).

Step 5: View the Application
Open your web browser and navigate to the local server URL provided in your terminal (typically http://localhost:5173/ or http://localhost:3000/).
```
