import {
  faMinus,
  faTimes,
  faEquals,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { AppList } from './AppList';
import {
  AppBarBtnProps,
  AppLoads,
  AppState,
  IconProps,
  SwitchProps,
} from './utils.d';
import './utils.scss';

export const Switch = (props: SwitchProps) => {
  return (
    <div className="switch">
      <input
        className="switch-input"
        type="checkbox"
        id={props.id}
        checked={props.state}
        onChange={() => props.onClick(!props.state)}
      />
      <label className="switch-core" htmlFor={props.id} />
    </div>
  );
};

export const Icon = (props: IconProps) => {
  if (!(props.value in AppList)) console.log(props.value);
  switch (props.type) {
    case 'Dock':
      return (
        <div
          className="icon"
          data-tooltip={AppList[props.value].name}
          data-type={props.type}
        >
          <img
            className="icon-img"
            src={'/assets/icons/apps/' + AppList[props.value].ctx + '.png'}
            alt=""
            data-type={props.type}
            onClick={() => props.dispatch(AppList[props.value].load)}
          />
        </div>
      );
    case 'Desktop':
      return (
        <div className="icon" data-type={props.type}>
          <img
            className="icon-img"
            src={'/assets/icons/apps/' + AppList[props.value].ctx + '.png'}
            alt=""
            data-type={props.type}
            onClick={() => props.dispatch(AppList[props.value].load)}
          />
        </div>
      );
    case 'Launchpad':
      return (
        <div className="icon" data-type={props.type}>
          <img
            className="icon-img"
            src={'/assets/icons/apps/' + AppList[props.value].ctx + '.png'}
            alt=""
            onClick={() => props.dispatch(AppList[props.value].load)}
            data-type={props.type}
            loading="lazy"
          />
          <div className="icon-text">{AppList[props.value].name}</div>
        </div>
      );
    default:
      return null;
  }
};

export const AppBarButton = (props: AppBarBtnProps) => {
  return (
    <div className="AppBar-Button-Container">
      <div className="close-btn" onClick={props.setClose}>
        <FontAwesomeIcon className="appbar-btn" icon={faTimes} />
      </div>
      <div className="min-btn">
        <FontAwesomeIcon className="appbar-btn" icon={faMinus} />
      </div>
      <div className="max-btn">
        <FontAwesomeIcon className="appbar-btn" icon={faPlus} />
      </div>
    </div>
  );
};

export const appReducer = (state: AppState, type: AppLoads): AppState => {
  switch (type) {
    case 'None':
      return { ...state, showLaunchpad: false };
    case 'Launchpad':
      return { ...state, showLaunchpad: !state.showLaunchpad };
    case 'Siri':
      return { ...state, showSiri: !state.showSiri };
    case 'Preferences':
      return { ...state, showPreferences: !state.showPreferences };
  }
};
