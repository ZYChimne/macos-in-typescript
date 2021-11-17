import React from 'react';
import './App.css';
import { Header } from './components/header/header';
import { Wallpaper } from './components/wallpaper/wallpaper';
function App() {
  return (
    <div className="App">
      <Wallpaper />
      <Header/>
    </div>
  );
}

export default App;
