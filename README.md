# Yukichi-UI

A modular, lightweight React component library built with modern web standards.

## 🤖 AI Assistant
This project was co-created with **Antigravity**, an agentic AI coding assistant by **Google DeepMind**.

## 🚀 Overview
Yukichi-UI provides a set of reusable, accessible, and customizable UI components designed to streamline React application development. It serves as both a foundation for building user interfaces and a playground for component development.

## 🛠 Tech Stack
- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: Vanilla CSS
- **Linting**: ESLint

## 📂 Project Structure
```text
yukichi-ui/
├── src/
│   ├── components/      # Reusable UI components (Button, NavBar, Checkbox, etc.)
│   └── App.jsx          # Component Playground & Demo
```

## ⚡ Getting Started

### Prerequisites
- Node.js (Latest LTS recommended)

### Installation
1. Clone the repository (if applicable) or navigate to the project directory.

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server to view the playground:
   ```bash
   npm run dev
   ```

## 📖 Usage
Import components directly into your React application:

```jsx
import { Button, TextField } from './components';

function MyForm() {
  return (
    <div style={{ display: 'flex', gap: '1rem', flexDirection: 'column' }}>
      <TextField label="Username" placeholder="Enter username" />
      <Button>Submit</Button>
    </div>
  );
}
```
