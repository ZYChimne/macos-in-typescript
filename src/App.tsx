import React, {
  Suspense,
  useEffect,
  useReducer,
  useRef,
  useState,
} from 'react';
import './App.scss';
import { ContactsInfoList } from './components/app/contacts/contacts.d';
import { MusicList } from './components/app/music/music.d';
import { PreferencesContentType } from './components/app/preferences/preferences.d';
import { BootScreen } from './components/bootscreen/bootscreen';
import { LockScreen } from './components/lockscreen/lockscreen';
import {
  focusReducer,
  menubarPanelReducer,
} from './components/menubar/menubar.r';
import { Wallpaper } from './components/wallpaper/wallpaper';
import { appStateReducer, InitialAppState } from './utils/utlils';

const App = () => {
  const appRef = useRef<HTMLDivElement>(null);
  const [boot, setBoot] = useState(false);
  const [lock, setLock] = useState(true);
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
  const [contentType, setContentType] =
    useState<PreferencesContentType>('Overview');
  const [curTag, setCurTag] = useState('Today');
  const [launchpadPage, setLaunchpadPage] = useState(0);
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
  const Dock = React.useRef(
    React.lazy(() => import('./components/dock/dock'))
  ).current;
  const Launchpad = React.useRef(
    React.lazy(() => import('./components/launchpad/launchpad'))
  ).current;
  const Menubar = React.useRef(
    React.lazy(() => import('./components/menubar/menubar'))
  ).current;
  const Contacts = React.useRef(
    React.lazy(() => import('./components/app/contacts/contacts'))
  ).current;
  const Finder = React.useRef(
    React.lazy(() => import('./components/app/finder/finder'))
  ).current;
  const Mail = React.useRef(
    React.lazy(() => import('./components/app/mail/mail'))
  ).current;
  const Maps = React.useRef(
    React.lazy(() => import('./components/app/maps/maps'))
  ).current;
  const Music = React.useRef(
    React.lazy(() => import('./components/app/music/music'))
  ).current;
  const Notes = React.useRef(
    React.lazy(() => import('./components/app/notes/notes'))
  ).current;
  const Photos = React.useRef(
    React.lazy(() => import('./components/app/photos/photos'))
  ).current;
  const Preferences = React.useRef(
    React.lazy(() => import('./components/app/preferences/preferences'))
  ).current;
  const Reminders = React.useRef(
    React.lazy(() => import('./components/app/reminders/reminders'))
  ).current;
  const Safari = React.useRef(
    React.lazy(() => import('./components/app/safari/safari'))
  ).current;
  const Siri = React.useRef(
    React.lazy(() => import('./components/app/siri/siri'))
  ).current;
  const windowHeight = window.innerHeight,
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
            <Suspense fallback={<div>Loading...</div>}>
              <Menubar
                curAppState={appState.curApp}
                menubarPanelDispatcher={menubarPanelDispatcher}
                menubarState={menubarPanelState}
                appState={appState}
                setApp={appStateDispatcher}
                wifiState={wifiState}
                setWifi={setWifi}
                bluetoothState={bluetoothState}
                setBluetooth={setBluetooth}
                focusState={focusState}
                setFocus={setFocus}
                darkState={darkState}
                setDark={setDark}
                musicList={musicList}
                playMusic={playMusic}
                playPrev={playPrev}
                playNext={playNext}
                fullscreen={fullscreenState}
                enterFullscreen={enterFullscreen}
                setLock={setLock}
                setBoot={setBoot}
              />
              <Siri show={appState.siri === 1} />
              <Launchpad
                show={appState.launchpad === 1}
                setApp={appStateDispatcher}
                page={launchpadPage}
                setPage={setLaunchpadPage}
              />
              <div onClick={() => menubarPanelDispatcher('Hide')}>
                <Dock appState={appState} setApp={appStateDispatcher} />
                <Preferences
                  state={appState.preferences}
                  setApp={appStateDispatcher}
                  contentType={contentType}
                  setContentType={setContentType}
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
                  curTag={curTag}
                  setCurTag={setCurTag}
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
            </Suspense>
          )}
        </>
      )}
    </div>
  ) : (
    <div>
      Your Window width = {windowWidth} and height = {windowHeight}.Please run
      on a device with width `&gt;`= 1024 and height `&gt;`= 600 for content to
      display properly. If you are using an iPad, you may need to rotate the
      screen and refresh the page.
    </div>
  );
};

export default App;
