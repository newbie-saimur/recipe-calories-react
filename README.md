# Recipe Calories React App

🍳 **Live Demo**: [https://recipe-calories-react.surge.sh](https://recipe-calories-react.surge.sh)

A modern, responsive recipe calorie tracking application built with React 19, Vite, and Tailwind CSS. This app allows users to browse recipes, add them to their cooking list, track calories and cooking time, and manage their meal planning with an intuitive and beautiful interface.

## ✨ Features

- **📖 Recipe Browser**: Browse through a curated collection of delicious recipes
- **➕ Add to Cook List**: Add recipes to your personal cooking list with one click
- **🔄 Duplicate Prevention**: Smart duplicate detection with toast notifications
- **⏱️ Time & Calorie Tracking**: Track cooking time and calories for each recipe
- **📱 Responsive Design**: Fully responsive design that works on all devices [Not Implemented Yet]
- **🎨 Modern UI**: Clean and modern interface built with Tailwind CSS and DaisyUI
- **⚡ Fast Performance**: Built with Vite for lightning-fast development and build times
- **🔔 Toast Notifications**: User-friendly feedback with React Toastify
- **🌙 Dark Mode Ready**: Built with dark mode support in mind [Not Implemented Yet]

## 🛠️ Technologies Used

### Frontend Framework
- **React 19.1.1** - Latest version of React with modern features
- **Vite 7.1.6** - Next-generation frontend tooling for fast development

### Styling & UI
- **Tailwind CSS 4.1.13** - Utility-first CSS framework for rapid UI development
- **DaisyUI 5.1.13** - Beautiful Tailwind CSS component library
- **React Icons 5.5.0** - Popular icon library for React
- **Google Fonts** - Lexend and Fira Sans font families

### State Management & Utilities
- **React Hooks** - Modern state management with useState
- **PropTypes 15.8.1** - Runtime type checking for React props [Not Implemented Yet]
- **React Toastify 11.0.5** - Beautiful toast notifications

### Development Tools
- **ESLint** - Code linting and quality checks
- **Vite Plugins** - Hot module replacement and fast builds

## 📦 Installation

1. **Clone the repository:**
```bash
git clone https://github.com/newbie-saimur/recipe-calories-react.git
cd recipe-calories-react
```

2. **Install dependencies:**
```bash
npm install
```

3. **Start the development server:**
```bash
npm run dev
```

4. **Open your browser and visit:** `http://localhost:5173`

## 🧞 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the development server with hot reload |
| `npm run build` | Build the project for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint for code quality checks |

## 📁 Project Structure

```
src/
├── components/
│   ├── Header/           # Navigation header with search and menu
│   ├── Hero/             # Hero banner section
│   ├── Recipe/           # Individual recipe card component
│   ├── Recipes/          # Recipe grid container
│   ├── RecipeContainer/  # Main container with recipes and cook table
│   └── CookTable/        # Cooking list and summary table
├── assets/               # Static assets (images, icons, fonts)
├── App.jsx              # Main application component
├── App.css              # Global styles and fonts
├── main.jsx             # Application entry point
└── index.css            # Tailwind imports and global styles
public/
├── recipes.json         # Recipe data source
├── CNAME               # Deployment configuration
└── *.jpg               # Recipe images and assets
```

## 🎨 Styling Architecture

This project uses a modern CSS architecture:

- **Tailwind CSS 4** - Latest version with new CSS-first approach
- **DaisyUI Components** - Pre-built components for consistent design
- **Custom Utility Classes** - Project-specific utilities
- **Google Fonts Integration** - Lexend and Fira Sans typography
- **Responsive Design** - Mobile-first approach with breakpoint system [Not Implemented Yet]
- **Dark Mode Support** - Built-in dark mode capabilities [Not Implemented Yet]

## 🚀 Key Features Implementation

### Recipe Management
- **Dynamic Recipe Loading** - Recipes loaded from JSON data
- **Interactive Cards** - Hover effects and smooth transitions
- **Cooking Time Display** - Clear time and calorie information

### Cook List Functionality
- **State Management** - React useState for managing cook list
- **Duplicate Prevention** - Smart checking to prevent duplicate entries
- **Real-time Updates** - Instant UI updates when adding/removing recipes

### User Experience
- **Toast Notifications** - Success and error feedback
- **Responsive Grid** - Adaptive layout for different screen sizes
- **Loading States** - Smooth interactions and feedback

## 🌐 Deployment

The app is deployed on **Surge.sh** with automatic updates.

**🔗 Live URL**: [https://recipe-calories-react.surge.sh](https://recipe-calories-react.surge.sh)

### Deploy Your Own Version:
```bash
# Build the project
npm run build

# Deploy to Surge (install surge globally first)
npm install -g surge
surge dist
```

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork the project**
2. **Create your feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit your changes** (`git commit -m 'Add some amazing feature'`)
4. **Push to the branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

### Contribution Guidelines:
- Follow the existing code style
- Add comments for complex logic
- Test your changes thoroughly
- Update documentation as needed

## 🐛 Known Issues & Future Enhancements

### Planned Features:
- [ ] Recipe search and filtering
- [ ] Recipe categories
- [ ] User accounts and saved recipes
- [ ] Recipe rating system
- [ ] Shopping list generation
- [ ] Nutritional information display

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Saimur Rahman**
- 🐙 GitHub: [@newbie-saimur](https://github.com/newbie-saimur)
- 🌐 Live Demo: [Recipe Calories App](https://recipe-calories-react.surge.sh)

## 🙏 Acknowledgments

- Recipe data and images from various cooking websites
- Icons from React Icons library
- Inspiration from modern recipe apps and cooking platforms

---

⭐ **If you found this project helpful, please give it a star!** ⭐
