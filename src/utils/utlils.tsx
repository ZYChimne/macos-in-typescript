import { faMinus, faTimes, faPlus } from '@fortawesome/free-solid-svg-icons';
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
import styles from './utils.module.scss';

export const Switch = (props: SwitchProps) => {
  return (
    <div className={styles.switch}>
      <input
        className={styles.switchInput}
        type="checkbox"
        id={props.id}
        checked={props.state}
        onChange={() => props.onClick(!props.state)}
      />
      <label className={styles.switchCore} htmlFor={props.id} />
    </div>
  );
};

export const Icon = (props: IconProps) => {
  if (!(props.value in AppList)) console.log(props.value);
  switch (props.type) {
    case 'Dock':
      return (
        <div
          className={styles.icon}
          data-tooltip={AppList[props.value].name}
          data-type={props.type}
        >
          <img
            className={styles.iconImg}
            src={'/assets/icons/apps/' + AppList[props.value].ctx + '.png'}
            alt=""
            data-type={props.type}
            onClick={() => props.dispatch(AppList[props.value].load)}
          />
        </div>
      );
    case 'Desktop':
      return (
        <div className={styles.icon} data-type={props.type}>
          <img
            className={styles.iconImg}
            src={'/assets/icons/apps/' + AppList[props.value].ctx + '.png'}
            alt=""
            data-type={props.type}
            onClick={() => props.dispatch(AppList[props.value].load)}
          />
        </div>
      );
    case 'Launchpad':
      return (
        <div className={styles.icon} data-type={props.type}>
          <img
            className={styles.iconImg}
            src={'/assets/icons/apps/' + AppList[props.value].ctx + '.png'}
            alt=""
            // onClick={() => props.dispatch(AppList[props.value].load)}
            data-type={props.type}
            loading="lazy"
          />
          <div className={styles.iconText}>{AppList[props.value].name}</div>
        </div>
      );
    default:
      return null;
  }
};

export const AppBarButton = (props: AppBarBtnProps) => {
  return (
    <div className={styles.appBarButtonContainer}>
      <div className={styles.closeBtn} onClick={props.setClose}>
        <FontAwesomeIcon className={styles.appbarBtn} icon={faTimes} />
      </div>
      <div className={styles.minBtn}>
        <FontAwesomeIcon className={styles.appbarBtn} icon={faMinus} />
      </div>
      <div className={styles.maxBtn}>
        <FontAwesomeIcon className={styles.appbarBtn} icon={faPlus} />
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
    case 'Mail':
      return { ...state, showMail: !state.showMail };
    case 'Maps':
      return { ...state, showMaps: !state.showMaps };
    case 'Calendar':
      return { ...state, showCalendar: !state.showCalendar };
    case 'Contacts':
      return { ...state, showContacts: !state.showContacts };
    case 'Finder':
      return { ...state, showFinder: !state.showFinder };
    case 'Safari':
      return { ...state, showSafari: !state.showSafari };
    case 'Photos':
      return { ...state, showPhotos: !state.showPhotos };
    case 'Reminders':
      return { ...state, showReminders: !state.showReminders };
    case 'Music':
      return { ...state, showMusic: !state.showMusic };
    case 'Store':
      return { ...state, showStore: !state.showStore };
    case 'Notes':
      return { ...state, showNotes: !state.showNotes };
  }
};
