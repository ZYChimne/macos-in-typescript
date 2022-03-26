import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faWifi,
  faSearch,
  faMoon,
  faCircleNotch,
  faBatteryFull,
  faLanguage,
  faLock,
  faCheck,
  faHeadphonesAlt,
  faSlidersH,
  faPlay,
  faForward,
  faBroadcastTower,
  faLightbulb,
  faTv,
  faPause,
} from '@fortawesome/free-solid-svg-icons';
import {
  faApple,
  faBluetoothB,
  faItunesNote,
} from '@fortawesome/free-brands-svg-icons';
import styles from './menubar.module.scss';
import { Switch } from '../../utils/utlils';
import {
  MenubarItems,
  MenubarProps,
  InputLanguages,
  ControlPanelProps,
  MenubarPanelAction,
  SampleWeatherData,
  CalendarDataList,
  FocusAction,
  FocusState,
} from './menubar.d';
import {
  AppState,
  AppStateAction,
  MorandiColorList,
} from '../../utils/utils.d';
import { AppList } from '../../utils/AppList';
export const Menubar = ({
  curAppState,
  menubarPanelDispatcher,
  menubarState,
  setApp,
  appState,
  wifiState,
  setWifi,
  darkState,
  setDark,
  bluetoothState,
  setBluetooth,
  focusState,
  setFocus,
  musicList,
  playMusic,
  playPrev,
  playNext,
  fullscreen,
  enterFullscreen,
  setLock,
  setBoot,
}: MenubarProps) => {
  const handleItemClicked = (
    event: React.MouseEvent,
    type: MenubarPanelAction
  ) => {
    event.stopPropagation();
    menubarPanelDispatcher(type);
  };
  return (
    <>
      <div
        className={styles.menubar}
        onClick={() => {
          menubarPanelDispatcher('Hide');
        }}
      >
        <div className={styles.menubarLeft}>
          <div
            className={styles.menubariconapple}
            data-active={menubarState.showApple}
            onClick={(event) => handleItemClicked(event, 'ShowApple')}
          >
            <FontAwesomeIcon
              className={styles.menubariconContent}
              icon={faApple}
            />
          </div>
          {MenubarItems[curAppState].map((item, i) => {
            return i === 0 ? (
              <div
                className={styles.menubarItem}
                style={{ fontWeight: 'bold' }}
                key={i}
              >
                {item}
              </div>
            ) : (
              <div className={styles.menubarItem} key={i}>
                {item}
              </div>
            );
          })}
        </div>
        <div className={styles.menubarRight}>
          <div
            className={styles.menubaricon}
            data-active={menubarState.showFocus}
            onClick={(event) => handleItemClicked(event, 'ShowFocus')}
          >
            <FontAwesomeIcon
              className={styles.menubariconContent}
              icon={faMoon}
            />
          </div>
          <div
            className={styles.menubaricon}
            data-active={menubarState.showInput}
            onClick={(event) => handleItemClicked(event, 'ShowInput')}
          >
            <FontAwesomeIcon
              className={styles.menubariconContent}
              icon={faLanguage}
            />
          </div>
          <div
            className={styles.menubaricon}
            data-active={menubarState.showBattery}
            onClick={(event) => handleItemClicked(event, 'ShowBattery')}
          >
            <FontAwesomeIcon
              className={styles.menubariconContent}
              icon={faBatteryFull}
            />
          </div>
          <div
            className={styles.menubaricon}
            data-active={menubarState.showWifi}
            onClick={(event) => handleItemClicked(event, 'ShowWifi')}
          >
            <FontAwesomeIcon
              className={styles.menubariconContent}
              icon={faWifi}
            />
          </div>
          <div
            className={styles.menubaricon}
            data-active={menubarState.showBluetooth}
            onClick={(event) => handleItemClicked(event, 'ShowBluetooth')}
          >
            <FontAwesomeIcon
              className={styles.menubariconContent}
              icon={faBluetoothB}
            />
          </div>
          <div
            className={styles.menubaricon}
            data-active={menubarState.showSearch}
            onClick={(event) => handleItemClicked(event, 'ShowSearch')}
          >
            <FontAwesomeIcon
              className={styles.menubariconContent}
              icon={faSearch}
            />
          </div>
          <div
            className={styles.menubaricon}
            data-active={menubarState.showControl}
            onClick={(event) => handleItemClicked(event, 'ShowControl')}
          >
            <FontAwesomeIcon
              className={styles.menubariconContent}
              icon={faSlidersH}
            />
          </div>
          <div
            className={styles.menubaricon}
            data-active={appState.siri === 1}
            onClick={(event) => {
              event.stopPropagation();
              if (appState.siri === 0) setApp('SIRI_OPENED');
              else setApp('SIRI_CLOSED');
            }}
          >
            <FontAwesomeIcon
              className={styles.menubariconContent}
              icon={faCircleNotch}
            />
          </div>
          <div
            className={styles.date}
            data-active={menubarState.showNotification}
            onClick={(event) => handleItemClicked(event, 'ShowNotification')}
          >
            {new Date().toLocaleDateString('en-CN', {
              weekday: 'short',
              month: 'short',
              day: 'numeric',
            })}
            &nbsp;&nbsp;
            {new Date().toLocaleTimeString('en-CN', {
              hour: '2-digit',
              minute: '2-digit',
            })}
          </div>
        </div>
      </div>
      <InputPanel show={menubarState.showInput} />
      <BatteryPanel show={menubarState.showBattery} />
      <NotificationPanel show={menubarState.showNotification} />
      <WiFiPanel
        show={menubarState.showWifi}
        state={wifiState}
        setState={setWifi}
      />
      <BluetoothPanel
        show={menubarState.showBluetooth}
        state={bluetoothState}
        setState={setBluetooth}
      />
      <SearchPanel
        show={menubarState.showSearch}
        appState={appState}
        setApp={setApp}
        menubarPanelDispatcher={menubarPanelDispatcher}
      />
      <FocusPanel
        show={menubarState.showFocus}
        state={focusState}
        dispatch={setFocus}
      />
      <ApplePanel
        show={menubarState.showApple}
        appState={appState}
        setApp={setApp}
        menubarPanelDispatcher={menubarPanelDispatcher}
        setLock={setLock}
        setBoot={setBoot}
      />
      <ControlPanel
        show={menubarState.showControl}
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
        fullscreen={fullscreen}
        enterFullscreen={enterFullscreen}
      />
    </>
  );
};

const WiFiPanel = ({
  show,
  state,
  setState,
}: {
  show: boolean;
  state: boolean;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className={styles.wifiPanel} data-show={show}>
      <div className={styles.panelLineBetween}>
        <div className={styles.panelTitle}>Wi-Fi</div>
        <div className={styles.panelSwitch}>
          <Switch id="wifiPanelSwitch" state={state} onClick={setState} />
        </div>
      </div>
      <div className={styles.separator} />
      {state ? (
        <>
          <div className={styles.panelLineNormal}>
            <div className={styles.panelSubtitle}>Preferred Network</div>
          </div>
          <div className={styles.panelLineBetweenHover}>
            <div className={styles.panelLeft}>
              <div className={styles.panelIconBox} data-on={state}>
                <FontAwesomeIcon
                  className={styles.panelIcon}
                  icon={faWifi}
                  data-on={state}
                />
              </div>
              <div className={styles.panelText}>Wi-Fi-5G</div>
            </div>
            <div className={styles.panelRight}>
              <FontAwesomeIcon
                className={styles.panelIconSmall}
                data-on={false}
                icon={faLock}
              />
            </div>
          </div>
          <div className={styles.separator} />
        </>
      ) : null}
      <div className={styles.panelLineNormalHover}>
        <div className={styles.panelText}>Network Preferences...</div>
      </div>
    </div>
  );
};

const BatteryPanel = ({ show }: { show: boolean }) => {
  return (
    <div className={styles.batteryPanel} data-show={show}>
      <div className={styles.panelLineBetween}>
        <div className={styles.panelTitle}>Battery</div>
        <div className={styles.panelSubtitle}>100%</div>
      </div>
      <div className={styles.panelLineNormal}>
        <div className={styles.panelSubtitle}>Power Source: Battery</div>
      </div>
    </div>
  );
};

const InputPanel = ({ show }: { show: boolean }) => {
  const [state, dispatch] = useState('Pinyin');
  const InputPanelLine = ({
    state,
    checked,
    dispatch,
  }: {
    state: string;
    checked: boolean;
    dispatch: React.Dispatch<React.SetStateAction<string>>;
  }) => {
    const inputCheck = (
      <div className={styles.inputChecked}>
        <FontAwesomeIcon
          className={styles.panelIconSmall}
          icon={faCheck}
          data-on={state}
        />
      </div>
    );
    const inputNotCheck = <div className={styles.inputChecked}></div>;
    return (
      <div className={styles.inputLine} onClick={() => dispatch(state)}>
        {checked ? inputCheck : inputNotCheck}
        <div className={styles.panelText}>{InputLanguages[state]}</div>
      </div>
    );
  };
  return (
    <div className={styles.inputPanel} data-show={show}>
      <InputPanelLine checked={true} dispatch={dispatch} state={state} />
      {Object.keys(InputLanguages).map((key) => {
        return key === state ? null : (
          <InputPanelLine
            checked={false}
            dispatch={dispatch}
            state={key}
            key={key}
          />
        );
      })}
    </div>
  );
};

const FocusPanel = ({
  show,
  state,
  dispatch,
}: {
  show: boolean;
  state: FocusState;
  dispatch: React.Dispatch<FocusAction>;
}) => {
  let OnText: string;
  switch (state.type) {
    case 'None':
      OnText = 'On';
      break;
    case 'Evening':
      OnText = 'On Until 7:00 PM';
      break;
    case 'Hour':
      let date = new Date();
      date.setHours(date.getHours() + 1);
      OnText = `On Until ${date.toLocaleTimeString('en-CN', {
        hour: '2-digit',
        minute: '2-digit',
      })}`;
      break;
    case 'Event':
      OnText = 'On Until 3:00 PM';
      break;
    default:
      OnText = 'On';
      break;
  }
  return (
    <div className={styles.focusPanel} data-show={show}>
      <div className={styles.focusLine1}>
        <div className={styles.panelTitle}>Focus</div>
        {state.state ? (
          <div className={styles.panelSubtitle}>{OnText}</div>
        ) : null}
      </div>
      <div className={styles.separator} />
      <div
        className={styles.panelLineNormalHover}
        onClick={() => {
          dispatch('ChangeFocus');
        }}
      >
        <div className={styles.panelIconBox} data-on={state.state}>
          <FontAwesomeIcon
            className={styles.panelIcon}
            icon={faMoon}
            data-on={state}
          />
        </div>
        <div className={styles.panelText}>Do Not Disturb</div>
      </div>
      <div
        className={styles.panelLineNormalHover}
        onClick={() => dispatch('HourChecked')}
      >
        <div className={styles.focusChecked}>
          {state.type === 'Hour' ? (
            <FontAwesomeIcon
              className={styles.panelIconSmall}
              icon={faCheck}
              data-on={state}
            />
          ) : null}
        </div>
        <div className={styles.panelText}>For 1 hour</div>
      </div>
      <div
        className={styles.panelLineNormalHover}
        onClick={() => dispatch('EveningChecked')}
      >
        <div className={styles.focusChecked}>
          {state.type === 'Evening' ? (
            <FontAwesomeIcon
              className={styles.panelIconSmall}
              icon={faCheck}
              data-on={state}
            />
          ) : null}
        </div>
        <div className={styles.panelText}>Until this evening</div>
      </div>
      <div
        className={styles.panelLineNormalHover}
        onClick={() => dispatch('EventChecked')}
      >
        <div className={styles.focusChecked}>
          {state.type === 'Event' ? (
            <FontAwesomeIcon
              className={styles.panelIconSmall}
              icon={faCheck}
              data-on={state}
            />
          ) : null}
        </div>
        <div className={styles.panelText}>Until the end of this event</div>
      </div>
      <div className={styles.separator} />
      <div className={styles.panelLineNormalHover}>
        <div className={styles.panelText}>Focus Preferences...</div>
      </div>
    </div>
  );
};

const BluetoothPanel = ({
  show,
  state,
  setState,
}: {
  show: boolean;
  state: boolean;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className={styles.bluetoothPanel} data-show={show}>
      <div className={styles.panelLineBetween}>
        <div className={styles.panelTitle}>Bluetooth</div>
        <div className={styles.panelSwitch}>
          <Switch id="bluetoothPanelSwitch" state={state} onClick={setState} />
        </div>
      </div>
      <div className={styles.separator} />
      <div className={styles.panelLineNormal}>
        <div className={styles.panelSubtitle}>Devices</div>
      </div>
      <div className={styles.panelLineNormalHover}>
        <div className={styles.panelIconBox} data-on={state}>
          <FontAwesomeIcon
            className={styles.panelIcon}
            icon={faHeadphonesAlt}
            data-on={state}
          />
        </div>
        <div className={styles.panelText}>WH-1000XM2</div>
      </div>
      <div className={styles.separator} />
      <div className={styles.panelLineNormalHover}>
        <div className={styles.panelText}>Bluetooth Preferences...</div>
      </div>
    </div>
  );
};

const SearchPanel = ({
  show,
  appState,
  menubarPanelDispatcher,
  setApp,
}: {
  show: boolean;
  appState: AppState;
  menubarPanelDispatcher: React.Dispatch<MenubarPanelAction>;
  setApp: React.Dispatch<AppStateAction>;
}) => {
  const [input, setInput] = useState('');
  let firstItem = true;
  const onInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    setInput(event.currentTarget.value);
  };
  return (
    <div className={styles.searchPanel} data-show={show}>
      <input
        className={styles.searchbar}
        type="text"
        onInput={onInputChange}
        placeholder="Spotlight Search"
      />
      {input.length !== 0 ? (
        <div className={styles.searchContent}>
          {Object.keys(AppList).map((item, index) => {
            if (
              AppList[item].name.toLowerCase().includes(input.toLowerCase())
            ) {
              const temp = (
                <div
                  className={styles.searchLine}
                  key={index}
                  data-active={firstItem}
                  onClick={() => {
                    menubarPanelDispatcher('ShowSearch');
                    setApp(AppList[item].action);
                  }}
                >
                  <img
                    className={styles.searchLineIcon}
                    src={`/assets/icons/apps/${AppList[item].ctx}.png`}
                    alt=""
                    loading="lazy"
                  />
                  <div className={styles.searchLineText}>
                    {AppList[item].name}
                  </div>
                </div>
              );
              firstItem = false;
              return temp;
            } else return null;
          })}
        </div>
      ) : null}
    </div>
  );
};

const ControlPanel = (props: ControlPanelProps) => {
  const [airdrop, setAirDrop] = useState(false);
  return (
    <div className={styles.controlPanel} data-show={props.show}>
      <div className={styles.controlLine1}>
        <div className={styles.controlLine1Left}>
          <div className={styles.controlLine1LeftBlock}>
            <div
              className={styles.panelIconBox}
              data-on={props.wifiState}
              onClick={() => props.setWifi(!props.wifiState)}
            >
              <FontAwesomeIcon className={styles.panelIcon} icon={faWifi} />
            </div>
            <div className={styles.controlLine1TextBlock}>
              <div className={styles.controlTitle}>Wi-Fi</div>
              <div className={styles.controlSubtitle}>Wi-Fi-5G</div>
            </div>
          </div>
          <div className={styles.controlLine1LeftBlock}>
            <div
              className={styles.panelIconBox}
              data-on={props.bluetoothState}
              onClick={() => props.setBluetooth(!props.bluetoothState)}
            >
              <FontAwesomeIcon
                className={styles.panelIcon}
                icon={faBluetoothB}
              />
            </div>
            <div className={styles.controlLine1TextBlock}>
              <div className={styles.controlTitle}>Bluetooth</div>
              <div className={styles.controlSubtitle}>On</div>
            </div>
          </div>
          <div className={styles.controlLine1LeftBlock}>
            <div
              className={styles.panelIconBox}
              data-on={airdrop && props.bluetoothState}
              onClick={() =>
                setAirDrop(props.bluetoothState ? !airdrop : false)
              }
            >
              <FontAwesomeIcon
                className={styles.panelIcon}
                icon={faBroadcastTower}
              />
            </div>
            <div className={styles.controlLine1TextBlock}>
              <div className={styles.controlTitle}>AirDrop</div>
              <div className={styles.controlSubtitle}>Everyone</div>
            </div>
          </div>
        </div>
        <div className={styles.controlLine1Right}>
          <div className={styles.controlLine1RightLine1}>
            <div className={styles.controlFocus}>
              <div
                className={styles.panelIconBox}
                data-on={props.focusState.state}
                onClick={() => props.setFocus('ChangeFocus')}
              >
                <FontAwesomeIcon className={styles.panelIcon} icon={faMoon} />
              </div>
              <div className={styles.panelText}>Focus</div>
            </div>
          </div>
          <div className={styles.controlLine1RightLine2}>
            <div
              className={styles.controlBlockSmall}
              data-active={props.darkState}
              onClick={() => props.setDark(!props.darkState)}
            >
              <FontAwesomeIcon
                className={styles.panelIcon}
                icon={faLightbulb}
              />
              <div className={styles.controlTitle}>Dark Mode</div>
            </div>
            <div
              className={styles.controlBlockSmall}
              data-active={props.fullscreen}
              onClick={props.enterFullscreen}
            >
              <FontAwesomeIcon className={styles.panelIcon} icon={faTv} />
              <div className={styles.controlTitle}>Fullscreen</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.controlLine2}>
        <div className={styles.controlLine2Left}>
          <div
            className={styles.controlAlbumImgBox}
            style={{
              background:
                MorandiColorList[
                  props.musicList?.song.genre % MorandiColorList.length
                ],
            }}
          >
            <FontAwesomeIcon
              className={styles.controlAlbumImg}
              icon={faItunesNote}
            />
          </div>
          <div className={styles.controlMusicInfo}>
            <div className={styles.controlTitle}>
              {props.musicList?.song.title}
            </div>
            <div className={styles.controlSubtitle}>
              {props.musicList?.song.singer[0].title} -{' '}
              {props.musicList?.song.album.title}
            </div>
          </div>
        </div>
        <div className={styles.controlLine2Right}>
          {props.musicList?.state === 'playing' ? (
            <FontAwesomeIcon
              className={styles.controllerIcon}
              icon={faPause}
              onClick={props.playMusic}
            />
          ) : (
            <FontAwesomeIcon
              className={styles.controllerIcon}
              icon={faPlay}
              onClick={props.playMusic}
            />
          )}
          <FontAwesomeIcon
            className={styles.panelIcon}
            icon={faForward}
            onClick={props.playNext}
          />
        </div>
      </div>
    </div>
  );
};

const ApplePanel = ({
  show,
  appState,
  setApp,
  menubarPanelDispatcher,
  setLock,
  setBoot,
}: {
  show: boolean;
  appState: AppState;
  setApp: React.Dispatch<AppStateAction>;
  menubarPanelDispatcher: React.Dispatch<MenubarPanelAction>;
  setLock: React.Dispatch<React.SetStateAction<boolean>>;
  setBoot: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className={styles.applePanel} data-show={show}>
      <div
        className={styles.panelLineAppleHover}
        onClick={() => {
          menubarPanelDispatcher('ShowApple');
          setApp('PREFERENCES_OPENED');
        }}
      >
        <div className={styles.panelText}>About This Mac</div>
      </div>
      <div className={styles.separator} />
      <div
        className={styles.panelLineAppleHover}
        onClick={() => {
          menubarPanelDispatcher('ShowApple');
          setApp('PREFERENCES_OPENED');
        }}
      >
        <div className={styles.panelText}>System Preferences...</div>
      </div>
      <div
        className={styles.panelLineAppleHover}
        onClick={() => {
          menubarPanelDispatcher('ShowApple');
          setApp('MAPS_OPENED');
        }}
      >
        <div className={styles.panelText}>Location</div>
      </div>
      <div className={styles.panelLineAppleHover}>
        <div className={styles.panelText}>App Store</div>
      </div>
      <div className={styles.separator} />
      <div
        className={styles.panelLineAppleHover}
        onClick={() => {
          menubarPanelDispatcher('ShowApple');
          setApp('FINDER_OPENED');
        }}
      >
        <div className={styles.panelText}>Recent Items</div>
      </div>
      <div className={styles.separator} />
      <div
        className={styles.panelLineAppleHover}
        onClick={() => {
          menubarPanelDispatcher('ShowApple');
          setApp('NONE');
        }}
      >
        <div className={styles.panelText}>Force Quit...</div>
      </div>
      <div className={styles.separator} />
      <div className={styles.panelLineAppleHover}>
        <div className={styles.panelText}>Sleep</div>
      </div>
      <div
        className={styles.panelLineAppleHover}
        onClick={() => {
          menubarPanelDispatcher('ShowApple');
          setBoot(true);
        }}
      >
        <div className={styles.panelText}>Restart...</div>
      </div>
      <div className={styles.panelLineAppleHover}>
        <div className={styles.panelText}>Shut Down...</div>
      </div>
      <div className={styles.separator} />
      <div
        className={styles.panelLineAppleHover}
        onClick={() => {
          menubarPanelDispatcher('ShowApple');
          setLock(true);
        }}
      >
        <div className={styles.panelText}>Lock Screen</div>
      </div>
      <div
        className={styles.panelLineAppleHover}
        onClick={() => {
          menubarPanelDispatcher('ShowApple');
          setLock(true);
        }}
      >
        <div className={styles.panelText}>Log Out Evan</div>
      </div>
    </div>
  );
};

const NotificationPanel = ({ show }: { show: boolean }) => {
  const [weatherData, setWeatherData] = useState(SampleWeatherData);
  useEffect(() => {
    if (show) {
      fetch(
        'https://devapi.qweather.com/v7/weather/7d?location=101020100&key=8617f107601d44fab3565012a155b6bc&lang=en'
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.code === '200') {
            setWeatherData(data);
          }
        });
    }
  }, [show]);
  return (
    <div className={styles.notificationPanel} data-show={show}>
      <div className={styles.calendarView}>
        {CalendarDataList.map((item, index) => {
          return (
            <div className={styles.calendarLine} key={index}>
              <div className={styles.calendarLineDate}>
                {new Date(
                  Number.parseInt(item.date.substring(0, 4)),
                  Number.parseInt(item.date.substring(4, 6)) - 1,
                  Number.parseInt(item.date.substring(6, 8))
                )
                  .toLocaleDateString('en-CN', {
                    weekday: 'long',
                    month: 'short',
                    day: 'numeric',
                  })
                  .toUpperCase()}
              </div>
              <div className={styles.calendarLineContent}>
                <div className={styles.calendarLineLeft}>
                  <div className={styles.calendarLineActive} />
                  <div className={styles.calendarLineTextContainer}>
                    <div className={styles.calendarLineTitle}>{item.title}</div>
                    <div className={styles.calendarLineSubtitle}>
                      {item.subtitle}
                    </div>
                  </div>
                </div>
                <div className={styles.calendarLineRight}>
                  <div className={styles.calendarLineSubtitle}>{item.from}</div>
                  <div className={styles.calendarLineSubtitle}>{item.to}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.weatherView}>
        <div className={styles.weatherHeader}>
          <div className={styles.weatherHeaderLeft}>
            <div className={styles.weatherCityName}>Shanghai</div>
            <div className={styles.weatherTitle}>
              {Math.round(
                (Number.parseInt(weatherData.daily[0].tempMax) +
                  Number.parseInt(weatherData.daily[0].tempMin)) /
                  2
              ) + `°`}
            </div>
          </div>
          <div className={styles.weatherHeaderRight}>
            <img
              className={styles.weatherHeaderIcon}
              src={`/assets/qweather/icons/${weatherData.daily[0].iconDay}.svg`}
              alt=""
            />
            <div className={styles.weatherSubtitle}>
              {weatherData.daily[0].textDay}
            </div>
            <div className={styles.weatherSubtitle}>
              H: {weatherData.daily[0].tempMax}°, L:{' '}
              {weatherData.daily[0].tempMin}°
            </div>
          </div>
        </div>
        <div className={styles.weatherContent}>
          {weatherData.daily.slice(1).map((item, index) => {
            return (
              <div className={styles.weatherContentCol} key={index}>
                <div className={styles.weatherContentDate}>
                  {Number.parseInt(item.fxDate.substring(5, 7))}/
                  {Number.parseInt(item.fxDate.substring(8, 10))}
                </div>
                <img
                  className={styles.weatherContentIcon}
                  src={`/assets/qweather/icons/${item.iconDay}.svg`}
                  alt=""
                />
                <div className={styles.weatherContentTemp}>
                  {Math.round(
                    (Number.parseInt(item.tempMax) +
                      Number.parseInt(item.tempMin)) /
                      2
                  )}
                  °
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Menubar;
