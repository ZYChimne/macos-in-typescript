import { useReducer } from 'react';
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
import { headerReducer, languageReducer} from './headerReducer';
import { HeaderItems, HeaderState, initialHeaderState, InputPanelLineProps, LanguageAction, LanguageState } from './headerType';
export const Header = (props: HeaderState) => {
  const [state, dispatch] = useReducer(headerReducer, {state: props.state});
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
        <div className='headericon'>
          <FontAwesomeIcon className='headericon-content' icon={faLanguage} />
        </div>
        <div className='headericon'>
          <FontAwesomeIcon
            className='headericon-content'
            icon={faBatteryFull}
          />
        </div>
        <div className='headericon'>
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

export const WiFiPanel = () => {
  return (
    <div className='WiFi-Panel'>
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

export const BatteryPanel = () => {
  return (
    <div className='Battery-Panel'>
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
  const [state, dispatch] = useReducer(languageReducer, {state: props.state});
  const inputCheck = (
    <div className='input-checked'>
      <FontAwesomeIcon className='input-icon' icon={faCheck} />
    </div>
  );
  const inputNotCheck = <div className='input-checked'></div>;
  return (<div className='input-line' onClick={()=>dispatch({type: props.state as 'Pinyin'|'English'})}>{props.checked ? inputCheck : inputNotCheck}<div className='input-text'>{props.text}</div></div>)
}
export const InputPanel = (props: LanguageState) => {
  switch (props.state) {
    case 'English':
      return (
        <div className='Input-Panel'>
          <InputPanelLine checked={true} text='English' state='English' />
          <InputPanelLine checked={false} text='Pinyin - Simplified' state='Pinyin' />
        </div>
      );
    case 'Pinyin':
      return (
        <div className='Input-Panel'>
          <InputPanelLine
            checked={true}
            text='Pinyin - Simplified'
            state='Pinyin'
          />
          <InputPanelLine checked={false} text='English' state='English' />
        </div>
      );
    default:
      return (
        <div className='Input-Panel'>
          <InputPanelLine
            checked={true}
            text='Pinyin - Simplified'
            state='Pinyin'
          />
          <InputPanelLine checked={false} text='English' state='English' />
        </div>
      );
  }
};
