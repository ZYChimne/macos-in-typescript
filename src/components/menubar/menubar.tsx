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
import { activeAppMapper, Switch } from '../../utils/utlils';
import {
  MenubarItems,
  MenubarProps,
  InputLanguages,
  InputPanelLineProps,
  PanelProps,
  SimplePanelProps,
  ControlPanelProps,
  FocusPanelProps,
  MenubarPanelAction,
  NotificationPanelProps,
  SampleWeatherData,
  CalendarDataList,
  ApplePanelProps,
  SearchPanelProps,
} from './menubar.d';
import { MorandiColorList } from '../../utils/utils.d';
import { AppList } from '../../utils/AppList';
export const Menubar = (props: MenubarProps) => {
  const handleItemClicked = (
    event: React.MouseEvent,
    type: MenubarPanelAction
  ) => {
    event.stopPropagation();
    props.menubarPanelDispatcher(type);
  };
  return (
    <div
      className={styles.menubar}
      onClick={() => {
        props.menubarPanelDispatcher('Hide');
      }}
    >
      <div className={styles.menubarLeft}>
        <div
          className={styles.menubariconapple}
          data-active={props.menubarState.showApple}
          onClick={(event) => handleItemClicked(event, 'ShowApple')}
        >
          <FontAwesomeIcon
            className={styles.menubariconContent}
            icon={faApple}
          />
        </div>
        {MenubarItems[props.state].map((item, i) => {
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
          data-active={props.menubarState.showFocus}
          onClick={(event) => handleItemClicked(event, 'ShowFocus')}
        >
          <FontAwesomeIcon
            className={styles.menubariconContent}
            icon={faMoon}
          />
        </div>
        <div
          className={styles.menubaricon}
          data-active={props.menubarState.showInput}
          onClick={(event) => handleItemClicked(event, 'ShowInput')}
        >
          <FontAwesomeIcon
            className={styles.menubariconContent}
            icon={faLanguage}
          />
        </div>
        <div
          className={styles.menubaricon}
          data-active={props.menubarState.showBattery}
          onClick={(event) => handleItemClicked(event, 'ShowBattery')}
        >
          <FontAwesomeIcon
            className={styles.menubariconContent}
            icon={faBatteryFull}
          />
        </div>
        <div
          className={styles.menubaricon}
          data-active={props.menubarState.showWifi}
          onClick={(event) => handleItemClicked(event, 'ShowWifi')}
        >
          <FontAwesomeIcon
            className={styles.menubariconContent}
            icon={faWifi}
          />
        </div>
        <div
          className={styles.menubaricon}
          data-active={props.menubarState.showBluetooth}
          onClick={(event) => handleItemClicked(event, 'ShowBluetooth')}
        >
          <FontAwesomeIcon
            className={styles.menubariconContent}
            icon={faBluetoothB}
          />
        </div>
        <div
          className={styles.menubaricon}
          data-active={props.menubarState.showSearch}
          onClick={(event) => handleItemClicked(event, 'ShowSearch')}
        >
          <FontAwesomeIcon
            className={styles.menubariconContent}
            icon={faSearch}
          />
        </div>
        <div
          className={styles.menubaricon}
          data-active={props.menubarState.showControl}
          onClick={(event) => handleItemClicked(event, 'ShowControl')}
        >
          <FontAwesomeIcon
            className={styles.menubariconContent}
            icon={faSlidersH}
          />
        </div>
        <div
          className={styles.menubaricon}
          data-active={props.appState.showSiri}
          onClick={(event) => {
            event.stopPropagation();
            props.appStateDispatcher('Siri');
          }}
        >
          <FontAwesomeIcon
            className={styles.menubariconContent}
            icon={faCircleNotch}
          />
        </div>
        <div
          className={styles.date}
          data-active={props.menubarState.showNotification}
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
  );
};

export const WiFiPanel = (props: PanelProps) => {
  return (
    <div className={styles.wifiPanel} data-show={props.show}>
      <div className={styles.panelLineBetween}>
        <div className={styles.panelTitle}>Wi-Fi</div>
        <div className={styles.panelSwitch}>
          <Switch
            id="wifiPanelSwitch"
            state={props.state}
            onClick={props.setState}
          />
        </div>
      </div>
      <div className={styles.separator} />
      {props.state ? (
        <>
          <div className={styles.panelLineNormal}>
            <div className={styles.panelSubtitle}>Preferred Network</div>
          </div>
          <div className={styles.panelLineBetweenHover}>
            <div className={styles.panelLeft}>
              <div className={styles.panelIconBox} data-on={props.state}>
                <FontAwesomeIcon
                  className={styles.panelIcon}
                  icon={faWifi}
                  data-on={props.state}
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

export const BatteryPanel = (prop: SimplePanelProps) => {
  return (
    <div className={styles.batteryPanel} data-show={prop.show}>
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

export const InputPanel = (prop: SimplePanelProps) => {
  const [state, dispatch] = useState('Pinyin');
  const InputPanelLine = (props: InputPanelLineProps) => {
    const inputCheck = (
      <div className={styles.inputChecked}>
        <FontAwesomeIcon
          className={styles.panelIconSmall}
          icon={faCheck}
          data-on={props.state}
        />
      </div>
    );
    const inputNotCheck = <div className={styles.inputChecked}></div>;
    return (
      <div
        className={styles.inputLine}
        onClick={() => props.dispatch(props.state)}
      >
        {props.checked ? inputCheck : inputNotCheck}
        <div className={styles.panelText}>{InputLanguages[props.state]}</div>
      </div>
    );
  };
  return (
    <div className={styles.inputPanel} data-show={prop.show}>
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

export const FocusPanel = (props: FocusPanelProps) => {
  let OnText: string;
  switch (props.state.type) {
    case 'None':
      OnText = 'On';
      break;
    case 'Evening':
      OnText = 'On Until 7:00 PM';
      break;
    case 'Hour':
      let date = new Date();
      date.setHours(date.getHours() + 1);
      OnText =
        'On Until ' +
        date.toLocaleTimeString('en-CN', {
          hour: '2-digit',
          minute: '2-digit',
        });
      break;
    case 'Event':
      OnText = 'On Until 3:00 PM';
      break;
    default:
      OnText = 'On';
      break;
  }
  return (
    <div className={styles.focusPanel} data-show={props.show}>
      <div className={styles.focusLine1}>
        <div className={styles.panelTitle}>Focus</div>
        {props.state.state ? (
          <div className={styles.panelSubtitle}>{OnText}</div>
        ) : null}
      </div>
      <div className={styles.separator} />
      <div
        className={styles.panelLineNormalHover}
        onClick={() => {
          props.dispatch('ChangeFocus');
        }}
      >
        <div className={styles.panelIconBox} data-on={props.state.state}>
          <FontAwesomeIcon
            className={styles.panelIcon}
            icon={faMoon}
            data-on={props.state}
          />
        </div>
        <div className={styles.panelText}>Do Not Disturb</div>
      </div>
      <div
        className={styles.panelLineNormalHover}
        onClick={() => props.dispatch('HourChecked')}
      >
        <div className={styles.focusChecked}>
          {props.state.type === 'Hour' ? (
            <FontAwesomeIcon
              className={styles.panelIconSmall}
              icon={faCheck}
              data-on={props.state}
            />
          ) : null}
        </div>
        <div className={styles.panelText}>For 1 hour</div>
      </div>
      <div
        className={styles.panelLineNormalHover}
        onClick={() => props.dispatch('EveningChecked')}
      >
        <div className={styles.focusChecked}>
          {props.state.type === 'Evening' ? (
            <FontAwesomeIcon
              className={styles.panelIconSmall}
              icon={faCheck}
              data-on={props.state}
            />
          ) : null}
        </div>
        <div className={styles.panelText}>Until this evening</div>
      </div>
      <div
        className={styles.panelLineNormalHover}
        onClick={() => props.dispatch('EventChecked')}
      >
        <div className={styles.focusChecked}>
          {props.state.type === 'Event' ? (
            <FontAwesomeIcon
              className={styles.panelIconSmall}
              icon={faCheck}
              data-on={props.state}
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
export const BluetoothPanel = (props: PanelProps) => {
  return (
    <div className={styles.bluetoothPanel} data-show={props.show}>
      <div className={styles.panelLineBetween}>
        <div className={styles.panelTitle}>Bluetooth</div>
        <div className={styles.panelSwitch}>
          <Switch
            id="bluetoothPanelSwitch"
            state={props.state}
            onClick={props.setState}
          />
        </div>
      </div>
      <div className={styles.separator} />
      <div className={styles.panelLineNormal}>
        <div className={styles.panelSubtitle}>Devices</div>
      </div>
      <div className={styles.panelLineNormalHover}>
        <div className={styles.panelIconBox} data-on={props.state}>
          <FontAwesomeIcon
            className={styles.panelIcon}
            icon={faHeadphonesAlt}
            data-on={props.state}
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
export const SearchPanel = (props: SearchPanelProps) => {
  const [input, setInput] = useState('');
  let firstItem = true;
  const onInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    setInput(event.currentTarget.value);
  };
  return (
    <div className={styles.searchPanel} data-show={props.show}>
      <input
        className={styles.searchbar}
        type="text"
        onInput={onInputChange}
        placeholder="Spotlight Search"
      />
      {input.length !== 0 ? (
        <div className={styles.searchContent}>
          {Object.keys(AppList).map((item, index) => {
            if (AppList[item].name.toLowerCase().includes(input)) {
              const temp = (
                <div
                  className={styles.searchLine}
                  key={index}
                  data-active={firstItem}
                  onClick={() => {
                    props.menubarPanelDispatcher('ShowSearch');
                    if (!activeAppMapper(props.appState, item))
                      props.appStateDispatcher(AppList[item].load);
                  }}
                >
                  <img
                    className={styles.searchLineIcon}
                    src={'/assets/icons/apps/' + AppList[item].ctx + '.png'}
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
export const ControlPanel = (props: ControlPanelProps) => {
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
                onClick={() => props.setFoucs('ChangeFocus')}
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
export const ApplePanel = (props: ApplePanelProps) => {
  return (
    <div className={styles.applePanel} data-show={props.show}>
      <div
        className={styles.panelLineAppleHover}
        onClick={() => {
          props.menubarPanelDispatcher('ShowApple');
          if (!props.appState.showPreferences)
            props.appStateDispatcher('Preferences');
        }}
      >
        <div className={styles.panelText}>About This Mac</div>
      </div>
      <div className={styles.separator} />
      <div
        className={styles.panelLineAppleHover}
        onClick={() => {
          props.menubarPanelDispatcher('ShowApple');
          if (!props.appState.showPreferences)
            props.appStateDispatcher('Preferences');
        }}
      >
        <div className={styles.panelText}>System Preferences...</div>
      </div>
      <div
        className={styles.panelLineAppleHover}
        onClick={() => {
          props.menubarPanelDispatcher('ShowApple');
          if (!props.appState.showMaps) props.appStateDispatcher('Maps');
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
          props.menubarPanelDispatcher('ShowApple');
          if (!props.appState.showFinder) props.appStateDispatcher('Finder');
        }}
      >
        <div className={styles.panelText}>Recent Items</div>
      </div>
      <div className={styles.separator} />
      <div
        className={styles.panelLineAppleHover}
        onClick={() => {
          props.menubarPanelDispatcher('ShowApple');
          if (!props.appState.showFinder) props.appStateDispatcher('None');
        }}
      >
        <div className={styles.panelText}>Force Quit...</div>
      </div>
      <div className={styles.separator} />
      <div className={styles.panelLineAppleHover}>
        <div className={styles.panelText}>Sleep</div>
      </div>
      <div className={styles.panelLineAppleHover}>
        <div className={styles.panelText}>Restart...</div>
      </div>
      <div className={styles.panelLineAppleHover}>
        <div className={styles.panelText}>Shut Down...</div>
      </div>
      <div className={styles.separator} />
      <div
        className={styles.panelLineAppleHover}
        onClick={() => {
          props.menubarPanelDispatcher('ShowApple');
          props.setLock(true);
        }}
      >
        <div className={styles.panelText}>Lock Screen</div>
      </div>
      <div
        className={styles.panelLineAppleHover}
        onClick={() => {
          props.menubarPanelDispatcher('ShowApple');
          props.setLock(true);
        }}
      >
        <div className={styles.panelText}>Log Out Evan</div>
      </div>
    </div>
  );
};
export const NotificationPanel = (props: NotificationPanelProps) => {
  const [weatherData, setWeatherData] = useState(SampleWeatherData);
  useEffect(() => {
    if (props.show) {
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
  }, [props.show]);
  return (
    <div className={styles.notificationPanel} data-show={props.show}>
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
              src={
                '/assets/qweather/icons/' +
                weatherData.daily[0].iconDay +
                '.svg'
              }
              alt=""
            />
            <div className={styles.weatherSubtitle}>
              {weatherData.daily[0].textDay}
            </div>
            <div className={styles.weatherSubtitle}>
              {'H: ' +
                weatherData.daily[0].tempMax +
                '°, L:' +
                weatherData.daily[0].tempMin +
                '°'}
            </div>
          </div>
        </div>
        <div className={styles.weatherContent}>
          {weatherData.daily.slice(1).map((item, index) => {
            return (
              <div className={styles.weatherContentCol} key={index}>
                <div className={styles.weatherContentDate}>
                  {Number.parseInt(item.fxDate.substring(5, 7)) +
                    '/' +
                    Number.parseInt(item.fxDate.substring(8, 10))}
                </div>
                <img
                  className={styles.weatherContentIcon}
                  src={'/assets/qweather/icons/' + item.iconDay + '.svg'}
                  alt=""
                />
                <div className={styles.weatherContentTemp}>
                  {Math.round(
                    (Number.parseInt(item.tempMax) +
                      Number.parseInt(item.tempMin)) /
                      2
                  ) + `°`}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
