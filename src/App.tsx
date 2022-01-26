import React, { useEffect, useReducer, useRef, useState } from 'react';
import './App.scss';
import { Contacts } from './components/app/contacts/contacts';
import { ContactsInfoList } from './components/app/contacts/contacts.d';
import { Finder } from './components/app/finder/finder';
import { Mail } from './components/app/mail/mail';
import { Maps } from './components/app/maps/maps';
import { Music } from './components/app/music/music';
import { MusicList } from './components/app/music/music.d';
import { Notes } from './components/app/notes/notes';
import { Photos } from './components/app/photos/photos';
import { Preferences } from './components/app/preferences/preferences';
import { Reminders } from './components/app/reminders/reminders';
import { Safari } from './components/app/safari/safari';
import { Siri } from './components/app/siri/siri';
import { BootScreen } from './components/bootscreen/bootscreen';
import { Dock } from './components/dock/dock';
import { Launchpad } from './components/launchpad/launchpad';
import { LockScreen } from './components/lockscreen/lockscreen';
import {
  Menubar,
  WiFiPanel,
  BatteryPanel,
  InputPanel,
  BluetoothPanel,
  FocusPanel,
  ApplePanel,
  ControlPanel,
  NotificationPanel,
  SearchPanel,
} from './components/menubar/menubar';
import {
  focusReducer,
  menubarPanelReducer,
} from './components/menubar/menubar.r';
import { Wallpaper } from './components/wallpaper/wallpaper';
import { appStateReducer, InitialAppState } from './utils/utlils';

const App = () => {
  const appRef = useRef<HTMLDivElement>(null);
  const [boot, setBoot] = useState(true);
  const [lock, setLock] = useState(false);
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
  const [appState, appStateDispatcher] = useReducer(
    appStateReducer,
    InitialAppState
  );
  const [wifiState, setWifi] = useState(true);
  const [bluetoothState, setBluetooth] = useState(true);
  const [focusState, setFocus] = useReducer(focusReducer, {
    state: true,
    type: 'None',
  });
  const [darkState, setDark] = useState(false);
  const [fullscreenState, setFullscreen] = useState(false);
  const [curContact, setCurContact] = useState(
    Object.keys(ContactsInfoList)[0]
  );
  const player = useRef(
    new (window as any).QMplayer({ target: 'web', fliter: true, loop: true })
  );
  const [musicList, setMuicList] = useState<any>(null);
  const playerPlayPause = () => {
    console.log(player.current.data);
    setMuicList(player.current.data);
  };
  const playMusic = () => {
    if (musicList) {
      if (musicList.state === 'playing') {
        player.current.pause();
      } else {
        player.current.play();
      }
    } else {
      player.current.play(MusicList);
    }
  };
  const playOnIndex = (index: number) => {
    player.current.play(MusicList, { index: index });
  };
  const playPrev = () => {
    player.current.playPrev();
  };
  const playNext = () => {
    player.current.playNext();
  };
  useEffect(() => {
    player.current.on('play', playerPlayPause);
    player.current.on('pause', playerPlayPause);
  }, []);
  useEffect(() => {
    document.onfullscreenchange = (event) => {
      setFullscreen(!fullscreenState);
    };
  }, [fullscreenState]);
  const enterFullscreen = () => {
    if (appRef.current) {
      if (!document.fullscreenElement) {
        appRef.current.requestFullscreen();
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        }
      }
    }
  };
  let windowHeight = window.innerHeight,
    windowWidth = window.innerWidth;
  return windowHeight >= 600 && windowWidth >= 1024 ? (
    <div className="App" ref={appRef}>
      {boot ? (
        <BootScreen boot={boot} setBoot={setBoot} />
      ) : (
        <>
          <LockScreen lock={lock} setLock={setLock} />
          <Wallpaper
            dark={darkState}
            menubarPanelDispatcher={menubarPanelDispatcher}
          />
          {!lock && (
            <>
              <Menubar
                state={appState.curApp}
                menubarPanelDispatcher={menubarPanelDispatcher}
                menubarState={menubarPanelState}
                appState={appState}
                setApp={appStateDispatcher}
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
              <SearchPanel
                show={menubarPanelState.showSearch}
                appState={appState}
                setApp={appStateDispatcher}
                menubarPanelDispatcher={menubarPanelDispatcher}
              />
              <FocusPanel
                show={menubarPanelState.showFocus}
                state={focusState}
                dispatch={setFocus}
              />
              <ApplePanel
                show={menubarPanelState.showApple}
                appState={appState}
                setApp={appStateDispatcher}
                menubarPanelDispatcher={menubarPanelDispatcher}
                setLock={setLock}
              />
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
                musicList={musicList}
                playMusic={playMusic}
                playPrev={playPrev}
                playNext={playNext}
                fullscreen={fullscreenState}
                enterFullscreen={enterFullscreen}
              />
              <Siri show={appState.siri === 1} />
              <NotificationPanel show={menubarPanelState.showNotification} />
              <Launchpad
                show={appState.launchpad === 1}
                setApp={appStateDispatcher}
              />
              <div onClick={() => menubarPanelDispatcher('Hide')}>
                <Dock appState={appState} setApp={appStateDispatcher} />
                <Preferences
                  state={appState.preferences}
                  setApp={appStateDispatcher}
                />
                <Safari state={appState.safari} setApp={appStateDispatcher} />
                <Mail state={appState.mail} setApp={appStateDispatcher} />
                <Maps state={appState.maps} setApp={appStateDispatcher} />
                <Finder state={appState.finder} setApp={appStateDispatcher} />
                <Photos state={appState.photos} setApp={appStateDispatcher} />
                <Contacts
                  state={appState.contacts}
                  setApp={appStateDispatcher}
                  curContact={curContact}
                  setCurContact={setCurContact}
                />
                <Reminders
                  state={appState.reminders}
                  setApp={appStateDispatcher}
                />
                <Notes state={appState.notes} setApp={appStateDispatcher} />
                <Music
                  state={appState.music}
                  setApp={appStateDispatcher}
                  musicList={musicList}
                  playMusic={playMusic}
                  playOnIndex={playOnIndex}
                  playPrev={playPrev}
                  playNext={playNext}
                />
              </div>
            </>
          )}
        </>
      )}
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
};

export default App;
