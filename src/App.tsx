import React, { useReducer } from 'react';
import './App.css';
import { Menubar, WiFiPanel,BatteryPanel, InputPanel, BluetoothPanel, FocusPanel, ApplePanel, ControlPanel } from './components/menubar/menubar';
import { MenubarPanelStates, MenubarPanelAction } from './components/menubar/typings';
import { Wallpaper } from './components/wallpaper/wallpaper';

export const menubarPanelReducer = (states: MenubarPanelStates, action: MenubarPanelAction): MenubarPanelStates => {
  switch (action.type) {
    case 'Hide':
      return {
        ...states,
        showWifi: false,
        showInput: false,
        showBattery: false,
        showBluetooth: false,
        showFocus: false,
        showApple: false,
        showControl: false,
        showSiri: false,
        showSearch: false,
        showNotification: false,
      };
    case 'ShowWifi':
      return {
        ...states,
        showWifi: !states.showWifi,
        showInput: false,
        showBattery: false,
        showBluetooth: false,
        showFocus: false,
        showApple: false,
        showControl: false,
        showSiri: false,
        showSearch: false,
        showNotification: false,
      };
    case 'ShowBattery':
      return {
        ...states,
        showWifi: false,
        showInput: false,
        showBattery: !states.showBattery,
        showBluetooth: false,
        showFocus: false,
        showApple: false,
        showControl: false,
        showSiri: false,
        showSearch: false,
        showNotification: false,
      };
    case 'ShowInput':
      return {
        ...states,
        showWifi: false,
        showInput: !states.showInput,
        showBattery: false,
        showBluetooth: false,
        showFocus: false,
        showApple: false,
        showControl: false,
        showSiri: false,
        showSearch: false,
        showNotification: false,
      };
    case 'ShowBluetooth':
      return {
        ...states,
        showWifi: false,
        showInput: false,
        showBattery: false,
        showBluetooth: !states.showBluetooth,
        showFocus: false,
        showApple: false,
        showControl: false,
        showSiri: false,
        showSearch: false,
        showNotification: false,
      };
    case 'ShowFocus':
      return {
        ...states,
        showWifi: false,
        showInput: false,
        showBattery: false,
        showBluetooth: false,
        showFocus: !states.showFocus,
        showApple: false,
        showControl: false,
        showSiri: false,
        showSearch: false,
        showNotification: false,
      };
    case 'ShowApple':
      return {
        ...states,
        showWifi: false,
        showInput: false,
        showBattery: false,
        showBluetooth: false,
        showFocus: false,
        showApple: !states.showApple,
        showControl: false,
        showSiri: false,
        showSearch: false,
      };
    case 'ShowControl':
      return {
        ...states,
        showWifi: false,
        showInput: false,
        showBattery: false,
        showBluetooth: false,
        showFocus: false,
        showApple: false,
        showControl: !states.showSiri,
        showSiri: false,
        showSearch: false,
      };
    case 'ShowSiri':
      return {
        ...states,
        showWifi: false,
        showInput: false,
        showBattery: false,
        showBluetooth: false,
        showFocus: false,
        showApple: false,
        showControl: false,
        showSiri: !states.showSiri,
        showSearch: false,
        showNotification: false,
      };
    case 'ShowSearch':
      return {
        ...states,
        showWifi: false,
        showInput: false,
        showBattery: false,
        showBluetooth: false,
        showFocus: false,
        showApple: false,
        showControl: false,
        showSiri: false,
        showSearch: !states.showSearch,
        showNotification: false,
      };
    case 'ShowNotification':
      return {
        ...states,
        showWifi: false,
        showInput: false,
        showBattery: false,
        showBluetooth: false,
        showFocus: false,
        showApple: false,
        showControl: false,
        showSiri: false,
        showSearch: false,
        showNotification: !states.showNotification,
      };
    default:
      return {
        ...states,
        showWifi: false,
        showInput: false,
        showBattery: false,
        showBluetooth: false,
        showFocus: false,
        showApple: false,
        showControl: false,
        showSiri: false,
        showSearch: false,
        showNotification: false,
      };
  }
}
function App() {
  const [menubarPanelState, menubarPanelDispatcher] = useReducer(
    menubarPanelReducer,
    {
      showWifi: false,
      showInput: false,
      showBattery: false,
      showBluetooth: false,
      showFocus: false,
      showApple: false,
      showControl: false,
      showSiri: false,
      showSearch: false,
      showNotification:false,
    }
  );
  return (
    <div className='App'>
      <Wallpaper />
      <Menubar state='Finder' menubarPanelDispatcher={menubarPanelDispatcher} />
      <WiFiPanel show={menubarPanelState.showWifi} />
      <InputPanel show={menubarPanelState.showInput} />
      <BatteryPanel show={menubarPanelState.showBattery} />
      <BluetoothPanel show={menubarPanelState.showBluetooth} />
      <FocusPanel show={menubarPanelState.showFocus} />
      <ApplePanel show={menubarPanelState.showApple} />
      <ControlPanel show={menubarPanelState.showControl}/>
    </div>
  );
}

export default App;
