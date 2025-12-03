# Ludo Game

A modern, interactive Ludo game built with React and styled with Tailwind CSS.

## 🎮 Features

- **Multiple Game Modes**
  - Play with Friends (Online multiplayer)
  - Play vs Computer (AI opponents)
  - Classic Mode
  - Quick Mode
  - Team-up Mode
  - Pass and Play Mode

- **Modern UI/UX**
  - Responsive design
  - Smooth animations
  - Dark blue theme with golden accents
  - Mobile-friendly interface
  - Profile management
  - Social features
  - Inventory and store system

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Deepshikhasingh03/Ludo-.git
cd Ludo-/Ludo-/frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to:
```
http://localhost:5173
```

## 📁 Project Structure

```
frontend/
├── src/
│   ├── components/
│   │   ├── GameModes/
│   │   │   ├── Friend.jsx          # Friend multiplayer lobby
│   │   │   ├── Friend2.jsx         # Friend room setup
│   │   │   ├── PassN.jsx           # Pass and Play mode
│   │   │   ├── Pclassic.jsx        # Classic mode setup
│   │   │   ├── Pteamup.jsx         # Team-up mode setup
│   │   │   ├── Teamup.jsx          # Team selection
│   │   │   └── Teamup2.jsx         # Team setup
│   │   ├── GameSelection.jsx       # Game mode selection
│   │   ├── GameSetup.jsx           # Game setup
│   │   ├── Home.jsx                # Home page
│   │   ├── LoginPage.jsx           # Login/auth
│   │   └── OnlinePlay.jsx          # Online gameplay
│   ├── pages/
│   │   ├── Game.jsx                # Main game page
│   │   ├── Event.jsx               # Events page
│   │   ├── Social.jsx              # Social features
│   │   ├── Inventory.jsx           # User inventory
│   │   ├── Store.jsx               # In-game store
│   │   ├── Profile.jsx             # User profile
│   │   ├── EditProfile.jsx         # Profile editing
│   │   ├── Settings.jsx            # App settings
│   │   └── Search.jsx              # Search functionality
│   ├── App.jsx                     # Main app component with routing
│   ├── main.jsx                    # Application entry point
│   └── index.css                   # Global styles
├── index.html                      # HTML template
├── vite.config.js                  # Vite configuration
└── package.json                    # Project dependencies
```

## 🛠️ Technologies Used

- **React 19** - UI framework
- **React Router DOM** - Client-side routing
- **Tailwind CSS 4** - Styling framework
- **Vite 7** - Build tool and dev server
- **Lucide React** - Icon library
- **React Icons** - Additional icon library

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Game Modes

### Play with Friends
- Create or join private rooms
- Support for 2-4 players
- Voice chat option
- Custom entry fees

### Play vs Computer
- Choose difficulty level
- Select number of AI opponents (2 or 4 players)
- Quick or Classic game modes

### Team-up Mode
- Play in teams
- Coordinated gameplay
- Team strategy options

### Pass and Play
- Local multiplayer on same device
- Perfect for family and friends

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the MIT License.

## 👥 Authors

- Deepshikha Singh - [@Deepshikhasingh03](https://github.com/Deepshikhasingh03)
