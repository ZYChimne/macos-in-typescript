import { faMinus, faTimes, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { AppList } from './AppList';
import {
  AppBarBtnProps,
  AppState,
  AppStateAction,
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
  // if (!(props.value in AppList)) console.log(props.value);
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
            onClick={() => props.dispatch(AppList[props.value].action)}
          />
          <div className={styles.dockIconActive} data-active={props.active} />
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
            onClick={() => props.dispatch(AppList[props.value].action)}
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
            onClick={() => props.dispatch(AppList[props.value].action)}
            data-type={props.type}
            loading="lazy"
          />
          <div className={styles.iconText} data-type={props.type}>
            {AppList[props.value].name}
          </div>
        </div>
      );
    default:
      return null;
  }
};

export const AppBarButton = (props: AppBarBtnProps) => {
  return (
    <div className={styles.appBarButtonContainer}>
      <div className={styles.closeBtn} onClick={props.setClosed}>
        <FontAwesomeIcon className={styles.appbarBtn} icon={faTimes} />
      </div>
      <div className={styles.minBtn} onClick={props.setMinimized}>
        <FontAwesomeIcon className={styles.appbarBtn} icon={faMinus} />
      </div>
      {props.setMaximized && (
        <div className={styles.maxBtn} onClick={props.setMaximized}>
          <FontAwesomeIcon className={styles.appbarBtn} icon={faPlus} />
        </div>
      )}
    </div>
  );
};
export const InitialAppState: AppState = {
  preApp: 'Finder',
  curApp: 'Finder',
  launchpad: 0,
  siri: 0,
  preferences: 0,
  mail: 0,
  maps: 0,
  finder: 0,
  safari: 0,
  photos: 0,
  contacts: 0,
  reminders: 0,
  notes: 0,
  music: 0,
};
export const appStateReducer = (
  appState: AppState,
  type: AppStateAction
): AppState => {
  switch (type) {
    case 'NONE':
      return InitialAppState;
    case 'CONTACTS_CLOSED':
      return { ...appState, contacts: 0, curApp: appState.preApp };
    case 'CONTACTS_MAXIMIZED':
      return {
        ...appState,
        preApp: appState.curApp,
        curApp: 'Contacts',
        contacts: 3,
      };
    case 'CONTACTS_MINIMIZED':
      return { ...appState, contacts: 2, curApp: appState.preApp };
    case 'CONTACTS_OPENED':
      return {
        ...appState,
        preApp: appState.curApp,
        curApp: 'Contacts',
        contacts: 1,
      };
    case 'FINDER_CLOSED':
      return { ...appState, finder: 0, curApp: appState.preApp };
    case 'FINDER_MAXIMIZED':
      return {
        ...appState,
        preApp: appState.curApp,
        curApp: 'Finder',
        finder: 3,
      };
    case 'FINDER_MINIMIZED':
      return { ...appState, finder: 2, curApp: appState.preApp };
    case 'FINDER_OPENED':
      return {
        ...appState,
        preApp: appState.curApp,
        curApp: 'Finder',
        finder: 1,
      };
    case 'LAUNCHPAD_CLOSED':
      return { ...appState, launchpad: 0 };
    case 'LAUNCHPAD_OPENED':
      return { ...appState, launchpad: 1 };
    case 'MAIL_CLOSED':
      return { ...appState, mail: 0, curApp: appState.preApp };
    case 'MAIL_MAXIMIZED':
      return { ...appState, preApp: appState.curApp, curApp: 'Mail', mail: 3 };
    case 'MAIL_MINIMIZED':
      return { ...appState, mail: 2, curApp: appState.preApp };
    case 'MAIL_OPENED':
      return { ...appState, preApp: appState.curApp, curApp: 'Mail', mail: 1 };
    case 'MAPS_CLOSED':
      return { ...appState, maps: 0, curApp: appState.preApp };
    case 'MAPS_MAXIMIZED':
      return { ...appState, preApp: appState.curApp, curApp: 'Maps', maps: 3 };
    case 'MAPS_MINIMIZED':
      return { ...appState, maps: 2, curApp: appState.preApp };
    case 'MAPS_OPENED':
      return { ...appState, preApp: appState.curApp, curApp: 'Maps', maps: 0 };
    case 'MUSIC_CLOSED':
      return { ...appState, music: 0, curApp: appState.preApp };
    case 'MUSIC_MAXIMIZED':
      return {
        ...appState,
        preApp: appState.curApp,
        curApp: 'Music',
        music: 3,
      };
    case 'MUSIC_MINIMIZED':
      return { ...appState, music: 2, curApp: appState.preApp };
    case 'MUSIC_OPENED':
      return {
        ...appState,
        preApp: appState.curApp,
        curApp: 'Music',
        music: 1,
      };
    case 'NOTES_CLOSED':
      return { ...appState, notes: 0, curApp: appState.preApp };
    case 'NOTES_MAXIMIZED':
      return {
        ...appState,
        preApp: appState.curApp,
        curApp: 'Notes',
        notes: 3,
      };
    case 'NOTES_MINIMIZED':
      return { ...appState, notes: 2, curApp: appState.preApp };
    case 'NOTES_OPENED':
      return {
        ...appState,
        preApp: appState.curApp,
        curApp: 'Notes',
        notes: 1,
      };
    case 'PHOTOS_CLOSED':
      return { ...appState, photos: 0, curApp: appState.preApp };
    case 'PHOTOS_MAXIMIZED':
      return {
        ...appState,
        preApp: appState.curApp,
        curApp: 'Photos',
        photos: 3,
      };
    case 'PHOTOS_MINIMIZED':
      return { ...appState, photos: 2, curApp: appState.preApp };
    case 'PHOTOS_OPENED':
      return {
        ...appState,
        preApp: appState.curApp,
        curApp: 'Photos',
        photos: 1,
      };
    case 'PREFERENCES_CLOSED':
      return { ...appState, preferences: 0, curApp: appState.preApp };
    case 'PREFERENCES_MINIMIZED':
      return { ...appState, preferences: 2, curApp: appState.preApp };
    case 'PREFERENCES_OPENED':
      return {
        ...appState,
        preApp: appState.curApp,
        curApp: 'Preferences',
        preferences: 1,
      };
    case 'REMINDERS_CLOSED':
      return { ...appState, reminders: 0, curApp: appState.preApp };
    case 'REMINDERS_MAXIMIZED':
      return {
        ...appState,
        preApp: appState.curApp,
        curApp: 'Reminders',
        reminders: 3,
      };
    case 'REMINDERS_MINIMIZED':
      return { ...appState, reminders: 2, curApp: appState.preApp };
    case 'REMINDERS_OPENED':
      return {
        ...appState,
        preApp: appState.curApp,
        curApp: 'Reminders',
        reminders: 1,
      };
    case 'SAFARI_CLOSED':
      return { ...appState, safari: 0, curApp: appState.preApp };
    case 'SAFARI_MAXIMIZED':
      return {
        ...appState,
        preApp: appState.curApp,
        curApp: 'Safari',
        safari: 3,
      };
    case 'SAFARI_MINIMIZED':
      return { ...appState, safari: 2, curApp: appState.preApp };
    case 'SAFARI_OPENED':
      return {
        ...appState,
        preApp: appState.curApp,
        curApp: 'Safari',
        safari: 1,
      };
    case 'SIRI_CLOSED':
      return { ...appState, siri: 0 };
    case 'SIRI_OPENED':
      return { ...appState, siri: 1 };
  }
};
export const activeAppMapper = (state: AppState, app: string): number => {
  switch (app) {
    case 'contacts':
      return state.contacts;
    case 'mail':
      return state.mail;
    case 'maps':
      return state.maps;
    case 'music':
      return state.music;
    case 'notes':
      return state.notes;
    case 'photos':
      return state.photos;
    case 'preferences':
      return state.preferences;
    case 'reminders':
      return state.reminders;
    case 'safari':
      return state.safari;
    // case 'siri': return state.showSiri;
    case 'finder':
      return state.finder;
    default:
      return 0;
  }
};
