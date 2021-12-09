import React, { useState } from 'react';
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
} from '@fortawesome/free-solid-svg-icons';
import { faApple, faBluetoothB } from '@fortawesome/free-brands-svg-icons';
import './menubar.scss';
import { Switch } from '../../utils/utlils';
import {
  MenubarItems,
  MenubarProps,
  InputLanguages,
  InputPanelLineProps,
  PanelProps,
  MusicList,
  SimplePanelProps,
  ControlPanelProps,
  FocusPanelProps,
  MenubarPanelAction,
} from './menubar.d';
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
      className="menubar"
      onClick={() => {
        props.menubarPanelDispatcher('Hide');
      }}
    >
      <div className="menubar-left">
        <div
          className="menubariconapple"
          data-active={props.menubarState.showApple}
          onClick={(event) => handleItemClicked(event, 'ShowApple')}
        >
          <FontAwesomeIcon className="menubaricon-content" icon={faApple} />
        </div>
        {MenubarItems[props.state].map((item, i) => {
          return i === 0 ? (
            <div className="menubarItem" style={{ fontWeight: 'bold' }} key={i}>
              {item}
            </div>
          ) : (
            <div className="menubarItem" key={i}>
              {item}
            </div>
          );
        })}
      </div>
      <div className="menubar-right">
        <div
          className="menubaricon"
          data-active={props.menubarState.showFocus}
          onClick={(event) => handleItemClicked(event, 'ShowFocus')}
        >
          <FontAwesomeIcon className="menubaricon-content" icon={faMoon} />
        </div>
        <div
          className="menubaricon"
          data-active={props.menubarState.showInput}
          onClick={(event) => handleItemClicked(event, 'ShowInput')}
        >
          <FontAwesomeIcon className="menubaricon-content" icon={faLanguage} />
        </div>
        <div
          className="menubaricon"
          data-active={props.menubarState.showBattery}
          onClick={(event) => handleItemClicked(event, 'ShowBattery')}
        >
          <FontAwesomeIcon
            className="menubaricon-content"
            icon={faBatteryFull}
          />
        </div>
        <div
          className="menubaricon"
          data-active={props.menubarState.showWifi}
          onClick={(event) => handleItemClicked(event, 'ShowWifi')}
        >
          <FontAwesomeIcon className="menubaricon-content" icon={faWifi} />
        </div>
        <div
          className="menubaricon"
          data-active={props.menubarState.showBluetooth}
          onClick={(event) => handleItemClicked(event, 'ShowBluetooth')}
        >
          <FontAwesomeIcon
            className="menubaricon-content"
            icon={faBluetoothB}
          />
        </div>
        <div
          className="menubaricon"
          data-active={props.menubarState.showSearch}
          onClick={(event) => handleItemClicked(event, 'ShowSearch')}
        >
          <FontAwesomeIcon className="menubaricon-content" icon={faSearch} />
        </div>
        <div
          className="menubaricon"
          data-active={props.menubarState.showControl}
          onClick={(event) => handleItemClicked(event, 'ShowControl')}
        >
          <FontAwesomeIcon className="menubaricon-content" icon={faSlidersH} />
        </div>
        <div
          className="menubaricon"
          data-active={props.menubarState.showSiri}
          onClick={(event) => handleItemClicked(event, 'ShowSiri')}
        >
          <FontAwesomeIcon
            className="menubaricon-content"
            icon={faCircleNotch}
          />
        </div>
        <div
          className="date"
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
    <div className="WiFi-Panel" data-show={props.show}>
      <div className="panel-line-between">
        <div className="panel-title">Wi-Fi</div>
        <div className="panel-switch">
          <Switch
            id="WiFi-Panel-Switch"
            state={props.state}
            onClick={props.setState}
          />
        </div>
      </div>
      <div className="separator" />
      {props.state ? (
        <>
          <div className="panel-line-normal">
            <div className="panel-subtitle">Preferred Network</div>
          </div>
          <div className="panel-line-between-hover">
            <div className="panel-left">
              <div className="panel-icon-box" data-on={props.state}>
                <FontAwesomeIcon className="panel-icon" icon={faWifi} />
              </div>
              <div className="panel-text">Wi-Fi-5G</div>
            </div>
            <div className="panel-right">
              <FontAwesomeIcon className="panel-icon-small" icon={faLock} />
            </div>
          </div>
          <div className="separator" />
        </>
      ) : null}
      <div className="panel-line-normal-hover">
        <div className="panel-text">Network Preferences...</div>
      </div>
    </div>
  );
};

export const BatteryPanel = (prop: SimplePanelProps) => {
  return (
    <div className="Battery-Panel" data-show={prop.show}>
      <div className="panel-line-between">
        <div className="panel-title">Battery</div>
        <div className="panel-subtitle">100%</div>
      </div>
      <div className="panel-line-normal">
        <div className="panel-subtitle">Power Source: Battery</div>
      </div>
    </div>
  );
};

export const InputPanel = (prop: SimplePanelProps) => {
  const [state, dispatch] = useState('Pinyin');
  const languageKeys = Object.keys(InputLanguages);
  const InputPanelLine = (props: InputPanelLineProps) => {
    const inputCheck = (
      <div className="input-checked">
        <FontAwesomeIcon className="panel-icon-small" icon={faCheck} />
      </div>
    );
    const inputNotCheck = <div className="input-checked"></div>;
    return (
      <div className="input-line" onClick={() => props.dispatch(props.state)}>
        {props.checked ? inputCheck : inputNotCheck}
        <div className="panel-text">{InputLanguages[props.state]}</div>
      </div>
    );
  };
  return (
    <div className="Input-Panel" data-show={prop.show}>
      <InputPanelLine checked={true} dispatch={dispatch} state={state} />
      {languageKeys.map((key, index) => {
        return key === state ? null : (
          <InputPanelLine
            checked={false}
            dispatch={dispatch}
            state={key}
            key={index}
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
    <div className="Focus-Panel" data-show={props.show}>
      <div className="focus-line1">
        <div className="panel-title">Focus</div>
        {props.state.state ? (
          <div className="panel-subtitle">{OnText}</div>
        ) : null}
      </div>
      <div className="separator" />
      <div
        className="panel-line-normal-hover"
        onClick={() => {
          props.dispatch('ChangeFocus');
        }}
      >
        <div className="panel-icon-box" data-on={props.state.state}>
          <FontAwesomeIcon className="panel-icon" icon={faMoon} />
        </div>
        <div className="panel-text">Do Not Disturb</div>
      </div>
      <div
        className="panel-line-normal-hover"
        onClick={() => props.dispatch('HourChecked')}
      >
        <div className="focus-checked">
          {props.state.type === 'Hour' ? (
            <FontAwesomeIcon className="panel-icon-small" icon={faCheck} />
          ) : null}
        </div>
        <div className="panel-text">For 1 hour</div>
      </div>
      <div
        className="panel-line-normal-hover"
        onClick={() => props.dispatch('EveningChecked')}
      >
        <div className="focus-checked">
          {props.state.type === 'Evening' ? (
            <FontAwesomeIcon className="panel-icon-small" icon={faCheck} />
          ) : null}
        </div>
        <div className="panel-text">Until this evening</div>
      </div>
      <div
        className="panel-line-normal-hover"
        onClick={() => props.dispatch('EventChecked')}
      >
        <div className="focus-checked">
          {props.state.type === 'Event' ? (
            <FontAwesomeIcon className="panel-icon-small" icon={faCheck} />
          ) : null}
        </div>
        <div className="panel-text">Until the end of this event</div>
      </div>
      <div className="separator" />
      <div className="panel-line-normal-hover">
        <div className="panel-text">Focus Preferences...</div>
      </div>
    </div>
  );
};
export const BluetoothPanel = (prop: PanelProps) => {
  return (
    <div className="Bluetooth-Panel" data-show={prop.show}>
      <div className="panel-line-between">
        <div className="panel-title">Bluetooth</div>
        <div className="panel-switch">
          <Switch
            id="Bluetooth-Panel-Switch"
            state={prop.state}
            onClick={prop.setState}
          />
        </div>
      </div>
      <div className="separator" />
      <div className="panel-line-normal">
        <div className="panel-subtitle">Devices</div>
      </div>
      <div className="panel-line-normal-hover">
        <FontAwesomeIcon className="panel-icon" icon={faHeadphonesAlt} />
        <div className="panel-text">WH-1000XM2</div>
      </div>
      <div className="separator" />
      <div className="panel-line-normal-hover">
        <div className="panel-text">Bluetooth Preferences...</div>
      </div>
    </div>
  );
};
export const ControlPanel = (props: ControlPanelProps) => {
  const [music, setMusic] = useState(0);
  const [airdrop, setAirDrop] = useState(false);
  return (
    <div className="Control-Panel" data-show={props.show}>
      <div className="control-line1">
        <div className="control-line1-left">
          <div className="control-line1-left-block">
            <div
              className="panel-icon-box"
              data-on={props.wifiState}
              onClick={() => props.setWifi(!props.wifiState)}
            >
              <FontAwesomeIcon className="panel-icon-big" icon={faWifi} />
            </div>
            <div className="control-line1-text-block">
              <div className="control-title">Wi-Fi</div>
              <div className="control-subtitle">Wi-Fi-5G</div>
            </div>
          </div>
          <div className="control-line1-left-block">
            <div
              className="panel-icon-box"
              data-on={props.bluetoothState}
              onClick={() => props.setBluetooth(!props.bluetoothState)}
            >
              <FontAwesomeIcon className="panel-icon-big" icon={faBluetoothB} />
            </div>
            <div className="control-line1-text-block">
              <div className="control-title">Bluetooth</div>
              <div className="control-subtitle">On</div>
            </div>
          </div>
          <div className="control-line1-left-block">
            <div
              className="panel-icon-box"
              data-on={airdrop && props.bluetoothState}
              onClick={() =>
                setAirDrop(props.bluetoothState ? !airdrop : false)
              }
            >
              <FontAwesomeIcon
                className="panel-icon-big"
                icon={faBroadcastTower}
              />
            </div>
            <div className="control-line1-text-block">
              <div className="control-title">AirDrop</div>
              <div className="control-subtitle">Everyone</div>
            </div>
          </div>
        </div>
        <div className="control-line1-right">
          <div className="control-line1-right-line1">
            <div className="control-focus">
              <div
                className="panel-icon-box"
                data-on={props.focusState.state}
                onClick={() => props.setFoucs('ChangeFocus')}
              >
                <FontAwesomeIcon className="panel-icon-big" icon={faMoon} />
              </div>
              <div className="panel-text">Focus</div>
            </div>
          </div>
          <div className="control-line1-right-line2">
            <div className="control-block-small">
              <FontAwesomeIcon className="panel-icon" icon={faLightbulb} />
              <div className="control-title">Dark Mode</div>
            </div>
            <div className="control-block-small">
              <FontAwesomeIcon className="panel-icon" icon={faTv} />
              <div className="control-title">Screen Monitoring</div>
            </div>
          </div>
        </div>
      </div>
      <div className="control-line2">
        <div className="control-line2-left">
          <div className="control-album">
            <img
              className="control-album-image"
              src="/assets/icons/ui/profile.png"
              loading="lazy"
              alt=""
            />
          </div>
          <div className="control-music-info">
            <div className="control-title">{MusicList[music].title}</div>
            <div className="control-subtitle">
              {MusicList[music].singer} - {MusicList[music].album}
            </div>
          </div>
        </div>
        <div className="control-line2-right">
          <FontAwesomeIcon className="panel-icon" icon={faPlay} />
          <FontAwesomeIcon
            className="panel-icon"
            icon={faForward}
            onClick={() => {
              setMusic((music + 1) % MusicList.length);
            }}
          />
        </div>
      </div>
    </div>
  );
};
export const ApplePanel = (prop: SimplePanelProps) => {
  return (
    <div className="Apple-Panel" data-show={prop.show}>
      <div className="panel-line-normal-hover">
        <div className="panel-text">About This Mac</div>
      </div>
      <div className="separator" />
      <div className="panel-line-normal-hover">
        <div className="panel-text">System Preferences...</div>
      </div>
      <div className="panel-line-normal-hover">
        <div className="panel-text">Location</div>
      </div>
      <div className="panel-line-normal-hover">
        <div className="panel-text">App Store</div>
      </div>
      <div className="separator" />
      <div className="panel-line-normal-hover">
        <div className="panel-text">Recent Items</div>
      </div>
      <div className="separator" />
      <div className="panel-line-normal-hover">
        <div className="panel-text">Force Quit...</div>
      </div>
      <div className="separator" />
      <div className="panel-line-normal-hover">
        <div className="panel-text">Sleep</div>
      </div>
      <div className="panel-line-normal-hover">
        <div className="panel-text">Restart...</div>
      </div>
      <div className="panel-line-normal-hover">
        <div className="panel-text">Shut Down...</div>
      </div>
      <div className="separator" />
      <div className="panel-line-normal-hover">
        <div className="panel-text">Lock Screen</div>
      </div>
      <div className="panel-line-normal-hover">
        <div className="panel-text">Log Out ZYChimne</div>
      </div>
    </div>
  );
};
