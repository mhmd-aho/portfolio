# 🖥️ Windows 11 Inspired Portfolio

A creative and interactive portfolio website designed as a Windows 11 operating system experience. Built with React and Framer Motion, this project showcases modern web development skills through an immersive desktop environment.

![Portfolio Preview](./src/assets/img/home-screen.jpg)

## ✨ Features

### 🎨 Interactive Desktop Environment
- **Fully Functional Desktop**: Drag-and-drop windows, minimize/maximize controls
- **Task Bar**: Quick access to applications with active state indicators
- **Start Menu**: Windows 11-style start menu with pinned and recommended apps
- **System Settings**: Brightness control, night mode, and quick settings panel
- **Lock Screen**: Time, date, and weather widgets with smooth transitions

### 📂 Applications
- **About Me**: Detailed introduction with tech stack and contact information
- **Projects**: Showcase of 8+ projects with live demos and GitHub repositories
- **File Explorer**: Navigate through desktop folders, documents, downloads, and pictures
- **Trash**: Recycle bin functionality with file restoration
- **Right-Click Context Menu**: Desktop interaction features

### 🎭 Animations & Interactions
- Smooth Framer Motion animations throughout
- Custom cursor with hover effects
- Drag-and-drop window management
- Auto-maximize on edge snap
- Modal blur effects
- Staggered content reveals

### 📱 Responsive Design
- Desktop-optimized experience (768px+)
- Mobile detection with user-friendly message
- Adaptive layouts and spacing

## 🛠️ Tech Stack

### Frontend
- **React 18** - Component-based UI library
- **Motion** - Advanced animations and gestures
- **Tailwind CSS** - Utility-first styling
- **Vite** - Fast build tool and dev server

### Key Libraries
- `motion` - Animations and drag interactions
- `ldrs` - Loading spinners
- Custom SVG icons and graphics

## 🚀 Getting Started

### Prerequisites
```bash
Node.js (v16 or higher)
npm or yarn
```

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/mhmd-aho/portfolio.git
cd portfolio
```

2. **Install dependencies**
```bash
npm install
```

3. **Run development server**
```bash
npm run dev
```

4. **Open in browser**
```
http://localhost:5173
```

### Build for Production
```bash
npm run build
npm run preview
```
## 🎯 Key Features Implementation

### Window Management
- Drag-and-drop with constraints
- Edge snap to maximize
- Z-index management for focus
- Minimize/restore functionality

### State Management
- React Hooks (useState, useEffect, useMemo)
- Efficient re-rendering with memoization
- Centralized app state

### Animation System
- Motion variants
- Staggered children animations
- Custom easing functions
- Performance-optimized transitions

## 🌐 Live Demo

**[View Live Portfolio](https://mhmd-aho.github.io/portfolio)**
