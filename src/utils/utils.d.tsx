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
  dispatch: React.Dispatch<AppStateAction>;
};
// 0 = Closed, 1 = Active, 2 = Maximized, 3 = Minimized
export type AppState = {
  preApp: string;
  curApp: string;
  launchpad: number;
  siri: number;
  preferences: number;
  mail: number;
  maps: number;
  finder: number;
  safari: number;
  photos: number;
  contacts: number;
  reminders: number;
  notes: number;
  music: number;
};
export type AppBarBtnProps = {
  setClosed: () => void;
  setMinimized: () => void;
  setMaximized: (() => void) | null;
};
export type AppStateAction =
  | 'NONE'
  | 'LAUNCHPAD_CLOSED'
  | 'LAUNCHPAD_OPENED'
  | 'SIRI_CLOSED'
  | 'SIRI_OPENED'
  | 'PREFERENCES_CLOSED'
  | 'PREFERENCES_OPENED'
  | 'PREFERENCES_MINIMIZED'
  | 'MAIL_CLOSED'
  | 'MAIL_OPENED'
  | 'MAIL_MINIMIZED'
  | 'MAIL_MAXIMIZED'
  | 'MAPS_CLOSED'
  | 'MAPS_OPENED'
  | 'MAPS_MINIMIZED'
  | 'MAPS_MAXIMIZED'
  | 'FINDER_CLOSED'
  | 'FINDER_OPENED'
  | 'FINDER_MINIMIZED'
  | 'FINDER_MAXIMIZED'
  | 'SAFARI_CLOSED'
  | 'SAFARI_OPENED'
  | 'SAFARI_MINIMIZED'
  | 'SAFARI_MAXIMIZED'
  | 'PHOTOS_CLOSED'
  | 'PHOTOS_OPENED'
  | 'PHOTOS_MINIMIZED'
  | 'PHOTOS_MAXIMIZED'
  | 'CONTACTS_CLOSED'
  | 'CONTACTS_OPENED'
  | 'CONTACTS_MINIMIZED'
  | 'CONTACTS_MAXIMIZED'
  | 'REMINDERS_CLOSED'
  | 'REMINDERS_OPENED'
  | 'REMINDERS_MINIMIZED'
  | 'REMINDERS_MAXIMIZED'
  | 'NOTES_CLOSED'
  | 'NOTES_OPENED'
  | 'NOTES_MINIMIZED'
  | 'NOTES_MAXIMIZED'
  | 'MUSIC_CLOSED'
  | 'MUSIC_OPENED'
  | 'MUSIC_MINIMIZED'
  | 'MUSIC_MAXIMIZED';
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
