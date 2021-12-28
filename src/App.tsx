import React, { useReducer, useRef, useState } from 'react';
import './App.scss';
import { Calendar } from './components/app/calendar/calendar';
import { Contacts } from './components/app/contacts/contacts';
import { Finder } from './components/app/finder/finder';
import { Mail } from './components/app/mail/mail';
import { Maps } from './components/app/maps/maps';
import { Music } from './components/app/music/music';
import { Notes } from './components/app/notes/notes';
import { Photos } from './components/app/photos/photos';
import { Preferences } from './components/app/preferences/preferences';
import { Reminders } from './components/app/reminders/reminders';
import { Siri } from './components/app/siri/siri';
import { Dock } from './components/dock/dock';
import { Launchpad } from './components/launchpad/launchpad';
import {
  Menubar,
  WiFiPanel,
  BatteryPanel,
  InputPanel,
  BluetoothPanel,
  FocusPanel,
  ApplePanel,
  ControlPanel,
} from './components/menubar/menubar';
import {
  focusReducer,
  menubarPanelReducer,
} from './components/menubar/menubar.r';
import { Wallpaper } from './components/wallpaper/wallpaper';
import { appReducer } from './utils/utlils';

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
      showNotification: false,
    }
  );
  const [appState, appStateDispatcher] = useReducer(appReducer, {
    showLaunchpad: false,
    showSiri: false,
    showPreferences: false,
    showMail: false,
    showMaps: false,
    showFinder: false,
    showSafari: false,
    showPhotos: false,
    showCalendar: false,
    showContacts: false,
    showReminders: false,
    showNotes: false,
    showMusic: false,
    showStore: false,
  });
  const [wifiState, setWifi] = useState(true);
  const [bluetoothState, setBluetooth] = useState(true);
  const [focusState, setFocus] = useReducer(focusReducer, {
    state: true,
    type: 'None',
  });
  const [darkState, setDark] = useState(false);
  let windowHeight = window.innerHeight,
    windowWidth = window.innerWidth;
  return windowHeight >= 600 && windowWidth >= 1024 ? (
    <div className="App">
      <Wallpaper />
      <Menubar
        state="Finder"
        menubarPanelDispatcher={menubarPanelDispatcher}
        menubarState={menubarPanelState}
        appState={appState}
        appStateDispatcher={appStateDispatcher}
      />
      <WiFiPanel
        show={menubarPanelState.showWifi}
        state={wifiState}
        setState={setWifi}
      />
      <InputPanel show={menubarPanelState.showInput} />
      <BatteryPanel show={menubarPanelState.showBattery} />
      <BluetoothPanel
        show={menubarPanelState.showBluetooth}
        state={bluetoothState}
        setState={setBluetooth}
      />
      <FocusPanel
        show={menubarPanelState.showFocus}
        state={focusState}
        dispatch={setFocus}
      />
      <ApplePanel show={menubarPanelState.showApple} />
      <ControlPanel
        show={menubarPanelState.showControl}
        wifiState={wifiState}
        setWifi={setWifi}
        bluetoothState={bluetoothState}
        setBluetooth={setBluetooth}
        focusState={focusState}
        setFoucs={setFocus}
        darkState={darkState}
        setDark={setDark}
      />
      <Siri show={appState.showSiri} />
      <Launchpad show={appState.showLaunchpad} setApp={appStateDispatcher} />
      <Dock setApp={appStateDispatcher} />
      <Preferences
        show={appState.showPreferences}
        setApp={appStateDispatcher}
      />
      <Mail show={appState.showMail} setApp={appStateDispatcher} />
      <Maps show={appState.showMaps} setApp={appStateDispatcher} />
      <Finder show={appState.showFinder} setApp={appStateDispatcher} />
      <Photos show={appState.showPhotos} setApp={appStateDispatcher} />
      <Calendar show={appState.showCalendar} setApp={appStateDispatcher} />
      <Contacts show={appState.showContacts} setApp={appStateDispatcher} />
      <Reminders show={appState.showReminders} setApp={appStateDispatcher} />
      <Notes show={appState.showNotes} setApp={appStateDispatcher} />
      <Music show={appState.showMusic} setApp={appStateDispatcher} />
    </div>
  ) : (
    <div>
      {`Your Window width = ` +
        windowWidth +
        ` and height = ` +
        windowHeight +
        ` .Please run on a device with width >= 1024 and height >= 600 for content to display properly. 
    If you are using an iPad, you may need to rotate the screen and refresh the page.`}
    </div>
  );
}

export default App;
