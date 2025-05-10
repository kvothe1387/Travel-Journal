# 🌍 Travel Journal

A personal travel diary built with React and deployed on GitHub Pages. This single-page application showcases my travel experiences while demonstrating fundamental React concepts.

![Travel Journal Screenshot](/screenshots/travel-journal-screenshot.png)

## 📝 Live Demo

Check out my travel memories: [https://kvothe1387.github.io/Travel-Journal/](https://kvothe1387.github.io/Travel-Journal/)

## 🚀 Features

- Responsive design that works on mobile, tablet, and desktop
- Clean, modern UI for showcasing travel memories
- Dynamic content generation from a centralized data source
- Location markers with Google Maps integration
- Photo for each destination

## 💻 Technologies Used

- React.js
- JavaScript (ES6+)
- CSS3
- Vite (Build tool)
- GitHub Pages (Deployment)

## 🧩 React Concepts Demonstrated

This project was built to practice several important React concepts:
- Component composition and reusability
- Props and data passing between components
- Array.map() for generating repetitive UI elements
- Conditional rendering
- Project organization and structure
- Deployment workflow with GitHub Pages

## 📂 Project Structure

```
Travel-Journal/
├── public/
│   ├── favicon.ico
│   └── index.html
├── src/
│   ├── assets/
│   │   ├── marker.png
│   │   └── [destination images]
│   ├── components/
│   │   ├── Entry.jsx
│   │   └── Header.jsx
│   ├── App.jsx
│   ├── data.js
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── package.json
├── README.md
└── vite.config.js
```

## 🏗️ Development Process

1. Created the initial React app using Vite
2. Designed the component structure and data model
3. Built reusable components for each travel entry
4. Implemented responsive design with CSS
5. Added dynamic content generation from data.js
6. Configured for GitHub Pages deployment
7. Implemented continuous deployment workflow

## 🔧 Installation and Setup

1. Clone this repository
   ```
   git clone https://github.com/kvothe1387/Travel-Journal.git
   ```

2. Navigate to the project directory
   ```
   cd Travel-Journal
   ```

3. Install dependencies
   ```
   npm install
   ```

4. Start the development server
   ```
   npm run dev
   ```

5. Build for production
   ```
   npm run build
   ```

## 🚀 Deployment

This project is deployed to GitHub Pages using GitHub Actions. Each push to the main branch automatically triggers a new build and deployment.

To deploy manually:
```
npm run deploy
```

## 📚 Lessons Learned

Through building this project, I gained valuable experience with:
- Properly structuring React components for reusability
- Managing data flow through props
- Working with array methods to generate dynamic content
- Handling asset paths in development vs production environments
- Troubleshooting deployment issues with GitHub Pages
- Implementing responsive design principles

## 🛠️ Future Improvements

- [ ] Add search/filter functionality
- [ ] Implement dark mode
- [ ] Add animations for smoother transitions
- [ ] Create an admin interface for adding new entries
- [ ] Implement a backend for dynamic content management

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👤 Author

**David McCullough**
- GitHub: [@kvothe1387](https://github.com/kvothe1387)
- LinkedIn: [/davidmc1387](https://www.linkedin.com/in/davidmc1387/)

---

*This project was created as part of my journey to improve my React skills and document my travels.*