import { useReducer, useState } from 'react';
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
} from './menubar.d';
export const Menubar = (props: MenubarProps) => {
  return (
    <div className='menubar'>
      <div className='menubar-left'>
        <div
          className='menubariconapple'
          onClick={() => props.menubarPanelDispatcher({ type: 'ShowApple' })}
        >
          <FontAwesomeIcon
            className='menubariconapple-content'
            icon={faApple}
          />
        </div>
        {MenubarItems[props.state].map((item, i) => {
          return i === 0 ? (
            <div className='menubarItem' style={{ fontWeight: 'bold' }} key={i}>
              {item}
            </div>
          ) : (
            <div className='menubarItem' key={i}>
              {item}
            </div>
          );
        })}
      </div>
      <div className='menubar-right'>
        <div
          className='menubaricon'
          onClick={() => props.menubarPanelDispatcher({ type: 'ShowFocus' })}
        >
          <FontAwesomeIcon className='menubaricon-content' icon={faMoon} />
        </div>
        <div
          className='menubaricon'
          onClick={() => props.menubarPanelDispatcher({ type: 'ShowInput' })}
        >
          <FontAwesomeIcon className='menubaricon-content' icon={faLanguage} />
        </div>
        <div
          className='menubaricon'
          onClick={() => props.menubarPanelDispatcher({ type: 'ShowBattery' })}
        >
          <FontAwesomeIcon
            className='menubaricon-content'
            icon={faBatteryFull}
          />
        </div>
        <div
          className='menubaricon'
          onClick={() => props.menubarPanelDispatcher({ type: 'ShowWifi' })}
        >
          <FontAwesomeIcon className='menubaricon-content' icon={faWifi} />
        </div>
        <div
          className='menubaricon'
          onClick={() =>
            props.menubarPanelDispatcher({ type: 'ShowBluetooth' })
          }
        >
          <FontAwesomeIcon
            className='menubaricon-content'
            icon={faBluetoothB}
          />
        </div>
        <div
          className='menubaricon'
          onClick={() => props.menubarPanelDispatcher({ type: 'ShowSearch' })}
        >
          <FontAwesomeIcon className='menubaricon-content' icon={faSearch} />
        </div>
        <div
          className='menubaricon'
          onClick={() => props.menubarPanelDispatcher({ type: 'ShowControl' })}
        >
          <FontAwesomeIcon className='menubaricon-content' icon={faSlidersH} />
        </div>
        <div
          className='menubaricon'
          onClick={() => props.menubarPanelDispatcher({ type: 'ShowSiri' })}
        >
          <FontAwesomeIcon
            className='menubaricon-content'
            icon={faCircleNotch}
          />
        </div>
        <div
          className='date'
          onClick={() =>
            props.menubarPanelDispatcher({ type: 'ShowNotification' })
          }
        >
          {new Date().toLocaleDateString('zh-CN', {
            weekday: 'short',
            month: 'short',
            day: 'numeric',
          })}
          &nbsp;&nbsp;
          {new Date().toLocaleTimeString('zh-CN', {
            hour: '2-digit',
            minute: '2-digit',
          })}
        </div>
      </div>
    </div>
  );
};

export const WiFiPanel = (prop: PanelProps) => {
  return (
    <div className='WiFi-Panel' data-show={prop.show}>
      <div className='WiFi-line1'>
        <div className='panel-title'>Wi-Fi</div>
        <div className='panel-switch'>
          <Switch id='WiFi-Panel-Switch'/>
        </div>
      </div>
      <div className='separator' />
      <div className='WiFi-line2'>
        <div className='panel-subtitle'>Preferred Network</div>
      </div>
      <div className='WiFi-line3'>
        <div className='WiFi-line3-left'>
          <FontAwesomeIcon className='panel-icon' icon={faWifi} />
          <div className='panel-text'>Wi-Fi-5G</div>
        </div>
        <div className='WiFi-line3-right'>
          <FontAwesomeIcon className='panel-icon' icon={faLock} />
        </div>
      </div>
      <div className='separator' />
      <div className='WiFi-line4'>
        <div className='panel-text'>Network Preferences...</div>
      </div>
    </div>
  );
};

export const BatteryPanel = (prop: PanelProps) => {
  return (
    <div className='Battery-Panel' data-show={prop.show}>
      <div className='battery-line1'>
        <div className='panel-title'>Battery</div>
        <div className='battery-text'>100%</div>
      </div>
      <div className='battery-line2'>
        <div className='battery-text'>Power Source: Battery</div>
      </div>
    </div>
  );
};
const InputPanelLine = (props: InputPanelLineProps) => {
  const inputCheck = (
    <div className='input-checked'>
      <FontAwesomeIcon className='input-icon' icon={faCheck} />
    </div>
  );
  const inputNotCheck = <div className='input-checked'></div>;
  return (
    <div className='input-line' onClick={() => props.dispatch(props.state)}>
      {props.checked ? inputCheck : inputNotCheck}
      <div className='input-text'>{InputLanguages[props.state]}</div>
    </div>
  );
};
export const InputPanel = (prop: PanelProps) => {
  const [state, dispatch] = useState('Pinyin');
  const languageKeys = Object.keys(InputLanguages);
  return (
    <div className='Input-Panel' data-show={prop.show}>
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
export const FocusPanel = (prop: PanelProps) => {
  return (
    <div className='Focus-Panel' data-show={prop.show}>
      <div className='focus-line1'>
        <div className='panel-title'>Focus</div>
        <div className='panel-subtitle'>On</div>
      </div>
      <div className='separator' />
      <div className='focus-line2'>
        <FontAwesomeIcon className='panel-icon' icon={faMoon} />
        <div className='panel-text'>Do Not Disturb</div>
      </div>
      <div className='focus-line3'>
        <div className='panel-text'>Until This Evening</div>
      </div>
      <div className='separator' />
      <div className='focus-line4'>
        <div className='panel-text'>Focus Preferences...</div>
      </div>
    </div>
  );
};
export const BluetoothPanel = (prop: PanelProps) => {
  return (
    <div className='Bluetooth-Panel' data-show={prop.show}>
      <div className='bluetooth-line1'>
        <div className='panel-title'>Bluetooth</div>
        <div className='panel-switch'>
          <Switch id='Bluetooth-Panel-Switch'/>
        </div>
      </div>
      <div className='separator' />
      <div className='bluetooth-line2'>
        <div className='panel-subtitle'>Devices</div>
      </div>
      <div className='bluetooth-line3'>
        <FontAwesomeIcon className='panel-icon' icon={faHeadphonesAlt} />
        <div className='panel-text'>WH-1000XM2</div>
      </div>
      <div className='separator' />
      <div className='bluetooth-line4'>
        <div className='panel-text'>Bluetooth Preferences...</div>
      </div>
    </div>
  );
};
export const ControlPanel = (prop: PanelProps) => {
  const [music, setMusic] = useState(0)
  return (
    <div className='Control-Panel' data-show={prop.show}>
      <div className='control-line1'>
        <div className='control-line1-left'>
          <div className='control-line1-left-block'>
            <div className='panel-icon-box'>
              <FontAwesomeIcon className='panel-icon-big' icon={faWifi} />
            </div>
            <div className='control-line1-text-block'>
              <div className='control-line1-block-title'>Wi-Fi</div>
              <div className='control-subtitle'>Wi-Fi-5G</div>
            </div>
          </div>
          <div className='control-line1-left-block'>
            <div className='panel-icon-box'>
              <FontAwesomeIcon className='panel-icon-big' icon={faBluetoothB} />
            </div>
            <div className='control-line1-text-block'>
              <div className='control-title'>Bluetooth</div>
              <div className='control-subtitle'>On</div>
            </div>
          </div>
          <div className='control-line1-left-block'>
            <div className='panel-icon-box'>
              <FontAwesomeIcon
                className='panel-icon-big'
                icon={faBroadcastTower}
              />
            </div>
            <div className='control-line1-text-block'>
              <div className='control--title'>AirDrop</div>
              <div className='control-subtitle'>Everyone</div>
            </div>
          </div>
        </div>
        <div className='control-line1-right'>
          <div className='control-line1-right-line1'>
            <div className='control-focus'>
              <div className='panel-icon-box'>
                <FontAwesomeIcon className='panel-icon-big' icon={faMoon} />
              </div>
              <div className='panel-text'>Focus</div>
            </div>
          </div>
          <div className='control-line1-right-line2'>
            <div className='control-display'>
              <FontAwesomeIcon className='panel-icon-big' icon={faLightbulb} />
              <div className='panel-text'>Dark Mode</div>
            </div>
            <div className='control-screen'>
              <FontAwesomeIcon className='panel-icon-big' icon={faTv} />
              <div className='panel-text'>Screen Monitoring</div>
            </div>
          </div>
        </div>
      </div>
      <div className='control-line2'>
        <div className='control-line2-left'>
          <div className='control-album'>
            <img
              className='control-album-image'
              src='/assets/icons/ui/profile.png'
              loading='lazy'
            />
          </div>
          <div className='control-music-info'>
            <div className='control-title'>{MusicList[music].title}</div>
            <div className='control-subtitle'>
              {MusicList[music].singer} - {MusicList[music].album}
            </div>
          </div>
        </div>
        <div className='control-line2-right'>
          <FontAwesomeIcon className='panel-icon-big' icon={faPlay} />
          <FontAwesomeIcon
            className='panel-icon-big'
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
export const ApplePanel = (prop: PanelProps) => {
  return (
    <div className='Apple-Panel' data-show={prop.show}>
      <div className='apple-panel-line'>
        <div className='panel-text'>About This Mac</div>
      </div>
      <div className='separator' />
      <div className='apple-panel-line'>
        <div className='panel-text'>System Preferences...</div>
      </div>
      <div className='apple-panel-line'>
        <div className='panel-text'>Location</div>
      </div>
      <div className='apple-panel-line'>
        <div className='panel-text'>App Store</div>
      </div>
      <div className='separator' />
      <div className='apple-panel-line'>
        <div className='panel-text'>Recent Items</div>
      </div>
      <div className='separator' />
      <div className='apple-panel-line'>
        <div className='panel-text'>Force Quit...</div>
      </div>
      <div className='separator' />
      <div className='apple-panel-line'>
        <div className='panel-text'>Sleep</div>
      </div>
      <div className='apple-panel-line'>
        <div className='panel-text'>Restart...</div>
      </div>
      <div className='apple-panel-line'>
        <div className='panel-text'>Shut Down...</div>
      </div>
      <div className='separator' />
      <div className='apple-panel-line'>
        <div className='panel-text'>Lock Screen</div>
      </div>
      <div className='apple-panel-line'>
        <div className='panel-text'>Log Out ZYChimne</div>
      </div>
    </div>
  );
};
