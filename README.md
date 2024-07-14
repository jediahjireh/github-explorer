# GitHub Explorer

GitHub Explorer is a full-stack web application that allows users to search for GitHub users and view their repositories. The application is built using React for the frontend and Express for the backend. It integrates with the GitHub API to fetch data.

## Table of Contents

- [Project Structure](#project-structure)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Contributing](#contributing)

## Project Structure

```
github-explorer/
├── README.md
├── backend
│   ├── README.md
│   ├── app.js
│   ├── config
│   │   └── config.js
│   ├── docs
│   ├── frontend
│   │   ├── README.md
│   │   ├── babel.config.cjs
│   │   ├── docs
│   │   ├── index.html
│   │   ├── jest-setup.js
│   │   ├── jest.config.cjs
│   │   ├── package.json
│   │   ├── src
│   │   │   ├── App.jsx
│   │   │   ├── api.jsx
│   │   │   ├── components
│   │   │   ├── main.jsx
│   │   │   └── styles
│   │   ├── tests
│   │   └── vite.config.js
│   ├── package.json
│   ├── server.js
│   └── tests
```

## Features

- Search for GitHub users
- View user details
- View repository details
- Responsive design
- Light and dark mode functionality

## Installation

Clone the repository:

```sh
  git clone https://github.com/jediahjireh/github-explorer.git
  cd github-explorer
```

## Usage

### Starting the Backend

Navigate to the backend directory and start the server:

```sh
cd backend
npm start
```

### Starting the Frontend

In a new terminal window, navigate to the frontend directory and run the development server:

```sh
cd frontend
npm run dev
```

Open your browser and navigate to `http://localhost:8000`.

## Screenshots

View attached screenshots of the project in action.

### GitHub Explorer

![GitHub Explorer (Dark Theme)](backend/frontend/docs/screenshots/dark-mode/github-explorer.png)
![GitHub Explorer (Light Theme)](backend/frontend/docs/screenshots/light-mode/github-explorer.png)

### GitHub Search

![GitHub Search (Dark Theme)](backend/frontend/docs/screenshots/dark-mode/github-search.png)
![GitHub Search (Light Theme)](backend/frontend/docs/screenshots/light-mode/github-search.png)

### Search Results

![Search Results (Dark Theme)](backend/frontend/docs/screenshots/dark-mode/search-results.png)
![Search Results (Light Theme)](backend/frontend/docs/screenshots/light-mode/search-results.png)

### User Details

![User Details (Dark Theme)](backend/frontend/docs/screenshots/dark-mode/user-details.png)
![User Details (Light Theme)](backend/frontend/docs/screenshots/light-mode/user-details.png)

### User's Repositories

![User's Repositories (Dark Theme)](backend/frontend/docs/screenshots/dark-mode/user-repos.png)
![User's Repositories (Light Theme)](backend/frontend/docs/screenshots/light-mode/user-repos.png)

### Repository Details

![Repository Details (Dark Theme)](backend/frontend/docs/screenshots/dark-mode/repo-details.png)
![Repository Details (Light Theme)](backend/frontend/docs/screenshots/light-mode/repo-details.png)

## Contributing

Contributions are welcome! Please fork the repository and create a pull request.
