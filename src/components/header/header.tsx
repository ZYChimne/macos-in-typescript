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
} from '@fortawesome/free-solid-svg-icons';
import { faApple } from '@fortawesome/free-brands-svg-icons';
import './header.scss';
import { Switch } from '../../utils/utlils';
import { HeaderItems, HeaderProps, InputLanguages, InputPanelLineProps, PanelProps} from './typings';
export const Header = (props: HeaderProps) => {
  // const [state, dispatch] = useReducer(headerReducer, {state: props.state});
  return (
    <div className='header'>
      <div className='header-left'>
        <div className='headericonapple'>
          <FontAwesomeIcon className='headericonapple-content' icon={faApple} />
        </div>
        {HeaderItems[props.state].map((item, i) => {
          return i === 0 ? (
            <div className='headerItem' style={{ fontWeight: 'bold' }} key={i}>
              {item}
            </div>
          ) : (
            <div className='headerItem' key={i}>
              {item}
            </div>
          );
        })}
      </div>
      <div className='header-right'>
        <div className='headericon'>
          <FontAwesomeIcon className='headericon-content' icon={faMoon} />
        </div>
        <div
          className='headericon'
          onClick={() => props.headerPanelDispatcher({ type: 'ShowInput' })}
        >
          <FontAwesomeIcon className='headericon-content' icon={faLanguage} />
        </div>
        <div
          className='headericon'
          onClick={() => props.headerPanelDispatcher({ type: 'ShowBattery' })}
        >
          <FontAwesomeIcon
            className='headericon-content'
            icon={faBatteryFull}
          />
        </div>
        <div
          className='headericon'
          onClick={() => props.headerPanelDispatcher({ type: 'ShowWifi' })}
        >
          <FontAwesomeIcon className='headericon-content' icon={faWifi} />
        </div>
        <div className='headericon'>
          <FontAwesomeIcon className='headericon-content' icon={faSearch} />
        </div>
        <div className='headericon'>
          <FontAwesomeIcon
            className='headericon-content'
            icon={faCircleNotch}
          />
        </div>
        <div className='date'>
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

export const WiFiPanel = (prop:PanelProps) => {
  return (
    <div className='WiFi-Panel' data-show={prop.show}>
      <div className='WiFi-line1'>
        <div className='panel-title'>Wi-Fi</div>
        <div className='WiFi-switch'>
          <Switch />
        </div>
      </div>
      <div className='seperator' />
      <div className='WiFi-line2'>
        <div className='panel-subtitle'>Preferred Network</div>
      </div>
      <div className='WiFi-line3'>
        <div className='WiFi-line3-left'>
          <FontAwesomeIcon className='WiFi-icon' icon={faWifi} />
          <div className='WiFi-name'>Wi-Fi-5G</div>
        </div>
        <div className='WiFi-line3-right'>
          <FontAwesomeIcon className='WiFi-icon' icon={faLock} />
        </div>
      </div>
    </div>
  );
};

export const BatteryPanel = (prop:PanelProps) => {
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
  return (<div className='input-line' onClick={()=>props.dispatch(props.state)}>{props.checked ? inputCheck : inputNotCheck}<div className='input-text'>{InputLanguages[props.state]}</div></div>)
}
export const InputPanel = (prop:PanelProps) => {
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
  
}
