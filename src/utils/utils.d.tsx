import React from 'react';
export type SwitchProps = {
  id: string;
  onClick: Function;
  state: boolean;
};
export type IconProps = {
  value: string;
  type: 'Dock' | 'Desktop' | 'Launchpad';
  active: boolean;
  dispatch: React.Dispatch<AppLoads>;
};
export type AppState = {
  showLaunchpad: boolean;
  showSiri: boolean;
  showPreferences: boolean;
  showMail: boolean;
  showMaps: boolean;
  showFinder: boolean;
  showSafari: boolean;
  showPhotos: boolean;
  showContacts: boolean;
  showReminders: boolean;
  showNotes: boolean;
  showMusic: boolean;
};
export type AppBarBtnProps = {
  setClose: () => void;
};
export type AppLoads =
  | 'None'
  | 'Launchpad'
  | 'Siri'
  | 'Preferences'
  | 'Mail'
  | 'Maps'
  | 'Finder'
  | 'Safari'
  | 'Photos'
  | 'Contacts'
  | 'Reminders'
  | 'Notes'
  | 'Music';
export const MorandiColorList: string[] = [
  // 209
  '#E2A5AD',
  '#EDCDCE',
  '#F6F6F6',
  '#B5C7C9',
  '#C9C0B5',
  // 193
  '#A85658',
  '#F5F1E8',
  '#CFC5BB',
  '#AC9B91',
  '#89726C',
  // 170
  '#EEF0F1',
  '#E2E0DF',
  '#D8C9AE',
  '#D2D689',
  '#A19E50',
  // 181
  '#9FBCC2',
  '#AFC7BF',
  '#C7CF70',
  '#DDD6CA',
  '#EEDFDA',
  // 205
  '#8C8BAA',
  '#DEDDE2',
  '#F5F4F0',
  '#F46D90',
  '#DE426B',
  // 172
  '#E1E6E6',
  '#C4DAE6',
  '#92C8E0',
  '#67ABD6',
  '#C3B0D6',
  // 180
  '#EFF1FE',
  '#BCC2D7',
  '#8895B1',
  '#546C8C',
  '#194568',
  // 199
  '#293844',
  '#9791A0',
  '#D8AEAE',
  '#FBDAC3',
  '#FFF1DD',
];
export const MonthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
