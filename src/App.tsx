import React, { useReducer } from 'react';
import './App.css';
import { Header, WiFiPanel,BatteryPanel, InputPanel } from './components/header/header';
import { HeaderPanelStates, HeaderPanelAction } from './components/header/typings';
import { Wallpaper } from './components/wallpaper/wallpaper';

export const headerPanelReducer = (states: HeaderPanelStates, action: HeaderPanelAction): HeaderPanelStates => {
  switch (action.type) {
    case 'Hide':
      return {
        ...states,
        showWifi: false,
        showInput: false,
        showBattery: false,
      };
    case 'ShowWifi':
      return {
        ...states,
        showWifi: !states.showWifi,
        showInput: false,
        showBattery: false,
      };
    case 'ShowBattery':
      return {
        ...states,
        showWifi: false,
        showInput: false,
        showBattery: !states.showBattery,
      };
    case 'ShowInput':
      return {
        ...states,
        showWifi: false,
        showInput: !states.showInput,
        showBattery: false,
      };
    default:
      return {
        ...states,
        showWifi: false,
        showInput: false,
        showBattery: false,
      };
  }
}
function App() {
  const [headerPanelState, headerPanelDispatcher]=useReducer(headerPanelReducer, {showWifi:false, showBattery:false, showInput:false})
  return (
    <div className='App' >
      <Wallpaper />
      <Header state='Finder' headerPanelDispatcher={headerPanelDispatcher}/>
      <WiFiPanel show={headerPanelState.showWifi} />
      <BatteryPanel show={headerPanelState.showBattery} />
      <InputPanel show={headerPanelState.showInput} />
    </div>
  );
}

export default App;
