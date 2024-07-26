# Wellness Retreat Explorer

A responsive web application for exploring and filtering wellness retreats.

## Features

- Single-page application built with React and TypeScript
- Display a list of wellness retreats with details
- Filter retreats by date and type
- Search functionality to find retreats by title
- Responsive design for both desktop and mobile devices
- Pagination for efficient data loading

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/uddinArsalan/wellness-retreat-explorer.git
   ```

2. Install the dependencies:
   ```
   npm install
   ```

## Running the Application

To run the application in development mode:

```
npm run dev
```

This will start the Vite development server. Open the URL provided in the terminal to view it in your browser.

## Building for Production

To create a production build:

```
npm run build
```

This will create a `dist` folder with the production-ready files.

## Linting

To run the linter:

```
npm run lint
```

## Preview Production Build

To preview the production build locally:

```
npm run preview
```

## Project Structure

```
/
├── src/
│   ├── api/
│   ├── assets/
│   ├── components/
│   ├── data/
│   ├── context/
│   ├── interfaces/
│   ├── utils/
│   ├── App.tsx
│   └── main.tsx
│
├── public/
│
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Technologies Used

- React
- TypeScript
- Vite (for build tooling)
- TailwindCSS
- ESLint (for linting)

## API Endpoints

The application uses the following API endpoints:

- Retreats list: `https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats`
- Individual retreat: `https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats/{id}`
- Filter: `https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats?filter={term}`
- Search: `https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats?search={term}`
- Pagination: `https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats?page={pageNumber}&limit={itemsPerPage}`

## License

[MIT](https://choosealicense.com/licenses/mit/)
