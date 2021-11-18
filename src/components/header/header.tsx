import React, { useReducer } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faWifi,
  faSearch,
  faMoon,
  faCircleNotch,
  faBatteryFull,
  faLanguage,
} from '@fortawesome/free-solid-svg-icons';
import { faApple } from '@fortawesome/free-brands-svg-icons';
import './header.scss';
type HeaderState = {
  items: string[];
};
type HeaderAction = {
  type: 'FINDER' | 'MAP';
};
const initialHeaderState = {
  items: ['Finder', 'File', 'Edit', 'View', 'Go', 'Window', 'Help'],
};
export const headerReducer = (
  state: HeaderState = initialHeaderState,
  action: HeaderAction
) => {
  switch (action.type) {
    case 'FINDER':
      return {
        ...state,
        items: ['Finder', 'File', 'Edit', 'View', 'Go', 'Window', 'Help'],
      };
  }
};
export const Header = () => {
  const [headerState, setHeaderState] = useReducer(
    headerReducer,
    initialHeaderState
  );
  return (
    <div className='header'>
      <div className='header-left'>
        <div className='headericonapple'>
          <FontAwesomeIcon className='headericonapple-content' icon={faApple} />
        </div>
        {headerState?.items.map((item, i) => {
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
          <FontAwesomeIcon
            className='headericon-content'
            icon={faLanguage}
          />
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
