# Post Management App

## Overview
This is a simple Vue 3-based post management application that allows users to create, edit, and delete posts. It integrates with the JSONPlaceholder API to simulate real-time data handling and provides an interactive, responsive UI powered by Tailwind CSS.

## Technologies
- **Vue 3**: JavaScript framework for building the user interface.
- **Tailwind CSS**: Utility-first CSS framework for fast UI design.
- **JavaScript (ES6+)**: Handles the logic for post creation, update, and deletion.
- **Fetch API**: Used for fetching data from JSONPlaceholder.
- **Vite**: Development environment for fast builds and live reloading.
- **pnpm**: Package manager for efficient dependency management.

## Key Features
- **CRUD Operations**: Create, edit, and delete posts.
- **Real-Time Updates**: The post list updates dynamically after any operation.
- **Responsive**: The app adapts to different screen sizes for an optimal experience.
- **Error Handling**: Displays error messages for failed operations.
- **Fast Build Setup**: Powered by Vite for quick development.

## File Structure
```
src/
├── assets/               # Static files
├── components/           # Reusable Vue components
│   ├── PostForm.vue      # Post creation and edit form
│   └── PostList.vue      # Displays list of posts
├── scripts/              # Logic files for API requests
│   └── postLogic.js      # Handles CRUD operations
├── views/                # Main app views
│   └── HomeView.vue      # Homepage view
├── App.vue               # Root Vue component
├── main.js               # App entry point
└── style.css             # Global styles

tailwind.config.js        # Tailwind CSS setup
postcss.config.js         # PostCSS config
vite.config.js            # Vite config
package.json              # Project dependencies
```

## Setup

1. **Install dependencies**:
   ```bash
   pnpm install
   ```

2. **Run development server**:
   ```bash
   pnpm dev
   ```

3. **Build the app for production**:
   ```bash
   pnpm build
   ```

4. **Preview the production build**:
   ```bash
   pnpm preview
   ```

Visit [http://localhost:5173](http://localhost:5173) to view the app.

## License
This project is licensed under the MIT License. See the `LICENSE` file for more details.
