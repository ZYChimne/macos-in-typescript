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
            onClick={() => props.dispatch(AppList[props.value].load)}
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
            onClick={() => props.dispatch(AppList[props.value].load)}
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

export const activeApp = (state: AppState): string => {
  if (state.showContacts === true) return 'Contacts';
  else if (state.showMail === true) return 'Mail';
  else if (state.showMaps === true) return 'Maps';
  else if (state.showMusic === true) return 'Music';
  else if (state.showNotes === true) return 'Notes';
  else if (state.showPhotos === true) return 'Photos';
  else if (state.showPreferences === true) return 'Preferences';
  else if (state.showReminders === true) return 'Reminders';
  else if (state.showSafari === true) return 'Safari';
  else if (
    state.showFinder === true ||
    state.showLaunchpad === true ||
    state.showSiri === true
  )
    return 'Finder';
  else return 'Finder';
};
export const activeAppMapper = (state: AppState, app: string): boolean => {
  switch (app) {
    case 'contacts':
      return state.showContacts;
    case 'mail':
      return state.showMail;
    case 'maps':
      return state.showMaps;
    case 'music':
      return state.showMusic;
    case 'notes':
      return state.showNotes;
    case 'photos':
      return state.showPhotos;
    case 'preferences':
      return state.showPreferences;
    case 'reminders':
      return state.showReminders;
    case 'safari':
      return state.showSafari;
    // case 'siri': return state.showSiri;
    case 'finder':
      return state.showFinder;
    default:
      return false;
  }
};
export const appReducer = (state: AppState, type: AppLoads): AppState => {
  switch (type) {
    case 'None':
      return {
        ...state,
        showLaunchpad: false,
        showContacts: false,
        showFinder: false,
        showMail: false,
        showMaps: false,
        showMusic: false,
        showNotes: false,
        showPhotos: false,
        showPreferences: false,
        showReminders: false,
        showSafari: false,
      };
    case 'Launchpad':
      return {
        ...state,
        showLaunchpad: !state.showLaunchpad,
        showContacts: false,
        showFinder: false,
        showMail: false,
        showMaps: false,
        showMusic: false,
        showNotes: false,
        showPhotos: false,
        showPreferences: false,
        showReminders: false,
        showSafari: false,
      };
    case 'Siri':
      return { ...state, showSiri: !state.showSiri };
    case 'Preferences':
      return {
        ...state,
        showLaunchpad: false,
        showContacts: false,
        showFinder: false,
        showMail: false,
        showMaps: false,
        showMusic: false,
        showNotes: false,
        showPhotos: false,
        showReminders: false,
        showSafari: false,
        showPreferences: !state.showPreferences,
      };
    case 'Mail':
      return {
        ...state,
        showLaunchpad: false,
        showContacts: false,
        showFinder: false,
        showMaps: false,
        showMusic: false,
        showNotes: false,
        showPhotos: false,
        showPreferences: false,
        showReminders: false,
        showSafari: false,
        showMail: !state.showMail,
      };
    case 'Maps':
      return {
        ...state,
        showLaunchpad: false,
        showContacts: false,
        showFinder: false,
        showMail: false,
        showMusic: false,
        showNotes: false,
        showPhotos: false,
        showPreferences: false,
        showReminders: false,
        showSafari: false,
        showMaps: !state.showMaps,
      };
    case 'Contacts':
      return {
        ...state,
        showLaunchpad: false,
        showFinder: false,
        showMail: false,
        showMaps: false,
        showMusic: false,
        showNotes: false,
        showPhotos: false,
        showPreferences: false,
        showReminders: false,
        showSafari: false,
        showContacts: !state.showContacts,
      };
    case 'Finder':
      return {
        ...state,
        showLaunchpad: false,
        showContacts: false,
        showMail: false,
        showMaps: false,
        showMusic: false,
        showNotes: false,
        showPhotos: false,
        showPreferences: false,
        showReminders: false,
        showSafari: false,
        showFinder: !state.showFinder,
      };
    case 'Safari':
      return {
        ...state,
        showLaunchpad: false,
        showContacts: false,
        showFinder: false,
        showMail: false,
        showMaps: false,
        showMusic: false,
        showNotes: false,
        showPhotos: false,
        showPreferences: false,
        showReminders: false,
        showSafari: !state.showSafari,
      };
    case 'Photos':
      return {
        ...state,
        showLaunchpad: false,
        showContacts: false,
        showFinder: false,
        showMail: false,
        showMaps: false,
        showMusic: false,
        showNotes: false,
        showPreferences: false,
        showReminders: false,
        showSafari: false,
        showPhotos: !state.showPhotos,
      };
    case 'Reminders':
      return {
        ...state,
        showLaunchpad: false,
        showContacts: false,
        showFinder: false,
        showMail: false,
        showMaps: false,
        showMusic: false,
        showNotes: false,
        showPhotos: false,
        showPreferences: false,
        showSafari: false,
        showReminders: !state.showReminders,
      };
    case 'Music':
      return {
        ...state,
        showLaunchpad: false,
        showContacts: false,
        showFinder: false,
        showMail: false,
        showMaps: false,
        showNotes: false,
        showPhotos: false,
        showPreferences: false,
        showReminders: false,
        showSafari: false,
        showMusic: !state.showMusic,
      };
    case 'Notes':
      return {
        ...state,
        showLaunchpad: false,
        showContacts: false,
        showFinder: false,
        showMail: false,
        showMaps: false,
        showMusic: false,
        showPhotos: false,
        showPreferences: false,
        showReminders: false,
        showSafari: false,
        showNotes: !state.showNotes,
      };
  }
};
