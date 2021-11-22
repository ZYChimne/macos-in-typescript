import React from 'react';
import './App.css';
import { Header, WiFiPanel,BatteryPanel, InputPanel } from './components/header/header';
import { initialHeaderState } from './components/header/headerType';
import { Wallpaper } from './components/wallpaper/wallpaper';
function App() {
  return (
    <div className="App">
      <Wallpaper />
      <Header state='Finder'/>
      <WiFiPanel />
      <BatteryPanel />
      <InputPanel state='Pinyin'/>
    </div>
  );
}

export default App;
