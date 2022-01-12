import React from 'react';
import { AppLoads, AppState } from '../../utils/utils.d';
export type MenubarProps = {
  state: string;
  menubarPanelDispatcher: React.Dispatch<MenubarPanelAction>;
  menubarState: MenubarPanelStates;
  appStateDispatcher: React.Dispatch<AppLoads>;
  appState: AppState;
};
export type PanelProps = {
  show: boolean;
  state: boolean;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
};
export type SimplePanelProps = {
  show: boolean;
};
export type SearchPanelProps = {
  show: boolean;
  appState: AppState;
  menubarPanelDispatcher: React.Dispatch<MenubarPanelAction>;
  appStateDispatcher: React.Dispatch<AppLoads>;
};
export type ApplePanelProps = {
  show: boolean;
  appState: AppState;
  appStateDispatcher: React.Dispatch<AppLoads>;
  menubarPanelDispatcher: React.Dispatch<MenubarPanelAction>;
  setLock: React.Dispatch<React.SetStateAction<boolean>>;
};
export type FocusState = {
  state: boolean;
  type: 'Hour' | 'Evening' | 'Event' | 'None';
};
export type FocusAction =
  | 'ChangeFocus'
  | 'HourChecked'
  | 'EveningChecked'
  | 'EventChecked';
export type FocusPanelProps = {
  show: boolean;
  state: FocusState;
  dispatch: React.Dispatch<FocusAction>;
};
export type ControlPanelProps = {
  show: boolean;
  wifiState: boolean;
  setWifi: React.Dispatch<React.SetStateAction<boolean>>;
  darkState: boolean;
  setDark: React.Dispatch<React.SetStateAction<boolean>>;
  bluetoothState: boolean;
  setBluetooth: React.Dispatch<React.SetStateAction<boolean>>;
  focusState: FocusState;
  setFoucs: React.Dispatch<FocusAction>;
  musicList: any;
  playMusic: () => void;
  playPrev: () => void;
  playNext: () => void;
  fullscreen: boolean;
  enterFullscreen: () => void;
};
export type InputPanelLineProps = {
  state: string;
  checked: boolean;
  dispatch: React.Dispatch<React.SetStateAction<string>>;
};
export type NotificationPanelProps = {
  show: boolean;
};
export type MenubarPanelStates = {
  showWifi: boolean;
  showBattery: boolean;
  showInput: boolean;
  showFocus: boolean;
  showBluetooth: boolean;
  showControl: boolean;
  showSiri: boolean;
  showApple: boolean;
  showSearch: boolean;
  showNotification: boolean;
};
export type CalendarData = {
  date: string;
  from: string;
  to: string;
  title: string;
  subtitle: string;
};
export type NotificationData = {
  app: string;
  title: string;
  subtitle: string;
};
export type MenubarPanelAction =
  | 'Hide'
  | 'ShowWifi'
  | 'ShowBattery'
  | 'ShowInput'
  | 'ShowFocus'
  | 'ShowBluetooth'
  | 'ShowControl'
  | 'ShowSiri'
  | 'ShowApple'
  | 'ShowSearch'
  | 'ShowNotification';
export const InputLanguages: { [key: string]: string } = {
  Pinyin: 'Pinyin - Simplified',
  English: 'English',
  French: 'French',
};
export const MenubarItems: { [key: string]: string[] } = {
  Finder: ['Finder', 'File', 'Edit', 'View', 'Go', 'Window', 'Help'],
  Launchpad: [],
  Siri: [],
  Safari: [
    'Safari',
    'File',
    'Edit',
    'View',
    'History',
    'Bookmarks',
    'Develop',
    'Window',
    'Help',
  ],
  Mail: [
    'Mail',
    'File',
    'Edit',
    'View',
    'Mailbox',
    'Message',
    'Format',
    'Window',
    'Help',
  ],
  Maps: ['Maps', 'File', 'Edit', 'View', 'Window', 'Help'],
  Photos: ['Photos', 'File', 'Edit', 'Image', 'View', 'Window', 'Help'],
  Contacts: ['Contacts', 'File', 'Edit', 'View', 'Card', 'Window', 'Help'],
  Reminders: ['Reminders', 'File', 'Edit', 'View', 'Window', 'Help'],
  Notes: ['Notes', 'File', 'Edit', 'Format', 'View', 'Window', 'Help'],
  Music: [
    'Apple Music',
    'File',
    'Edit',
    'Song',
    'View',
    'Controls',
    'Account',
    'Window',
    'Help',
  ],
  Preferences: ['System Preferences', 'Edit', 'View', 'Window', 'Help'],
};
export const CalendarDataList: CalendarData[] = [
  {
    date: '20210101',
    from: '8:00',
    to: '20: 00',
    title: 'Tour to Disney',
    subtitle: 'Have Fun!',
  },
  {
    date: '20210102',
    from: '14:00',
    to: '17: 00',
    title: 'Afternoon Tea',
    subtitle: 'At the Peace Hotel',
  },
  {
    date: '20210103',
    from: '7:00',
    to: '9: 00',
    title: 'Business Meeting',
    subtitle: 'Prepare the Presentaion',
  },
];
export const SampleWeatherData = {
  code: '200',
  updateTime: '2022-01-10T19:35+08:00',
  fxLink: 'http://hfx.link/2bc1',
  daily: [
    {
      fxDate: '2022-01-10',
      sunrise: '06:54',
      sunset: '17:09',
      moonrise: '11:55',
      moonset: '00:55',
      moonPhase: 'First Quarter',
      moonPhaseIcon: '802',
      tempMax: '9',
      tempMin: '2',
      iconDay: '104',
      textDay: 'Overcast',
      iconNight: '305',
      textNight: 'Light Rain',
      wind360Day: '334',
      windDirDay: 'NW',
      windScaleDay: '3-4',
      windSpeedDay: '15',
      wind360Night: '315',
      windDirNight: 'NW',
      windScaleNight: '3-4',
      windSpeedNight: '16',
      humidity: '74',
      precip: '0.0',
      pressure: '1026',
      vis: '25',
      cloud: '16',
      uvIndex: '1',
    },
    {
      fxDate: '2022-01-11',
      sunrise: '06:54',
      sunset: '17:10',
      moonrise: '12:24',
      moonset: '01:51',
      moonPhase: 'Waxing gibbous',
      moonPhaseIcon: '803',
      tempMax: '6',
      tempMin: '0',
      iconDay: '100',
      textDay: 'Sunny',
      iconNight: '150',
      textNight: 'Clear',
      wind360Day: '0',
      windDirDay: 'N',
      windScaleDay: '3-4',
      windSpeedDay: '16',
      wind360Night: '0',
      windDirNight: 'N',
      windScaleNight: '1-2',
      windSpeedNight: '3',
      humidity: '59',
      precip: '0.0',
      pressure: '1026',
      vis: '25',
      cloud: '25',
      uvIndex: '3',
    },
    {
      fxDate: '2022-01-12',
      sunrise: '06:54',
      sunset: '17:11',
      moonrise: '12:54',
      moonset: '02:47',
      moonPhase: 'Waxing gibbous',
      moonPhaseIcon: '803',
      tempMax: '8',
      tempMin: '0',
      iconDay: '101',
      textDay: 'Cloudy',
      iconNight: '151',
      wind360Day: '135',
      windDirDay: 'SE',
      windScaleDay: '1-2',
      windSpeedDay: '3',
      wind360Night: '315',
      windDirNight: 'NW',
      windScaleNight: '3-4',
      windSpeedNight: '16',
      humidity: '60',
      precip: '0.0',
      pressure: '1024',
      vis: '25',
      cloud: '0',
      uvIndex: '3',
    },
    {
      fxDate: '2022-01-13',
      sunrise: '06:54',
      sunset: '17:12',
      moonrise: '13:28',
      moonset: '03:43',
      moonPhase: 'Waxing gibbous',
      moonPhaseIcon: '803',
      tempMax: '7',
      tempMin: '1',
      iconDay: '104',
      textDay: 'Overcast',
      iconNight: '104',
      textNight: 'Overcast',
      wind360Day: '0',
      windDirDay: 'N',
      windScaleDay: '3-4',
      windSpeedDay: '16',
      wind360Night: '315',
      windDirNight: 'NW',
      windScaleNight: '3-4',
      windSpeedNight: '16',
      humidity: '62',
      precip: '0.0',
      pressure: '1028',
      vis: '25',
      cloud: '8',
      uvIndex: '3',
    },
    {
      fxDate: '2022-01-14',
      sunrise: '06:54',
      sunset: '17:13',
      moonrise: '14:05',
      moonset: '04:39',
      moonPhase: 'Waxing gibbous',
      moonPhaseIcon: '803',
      tempMax: '6',
      tempMin: '2',
      iconDay: '305',
      textDay: 'Light Rain',
      iconNight: '305',
      textNight: 'Light Rain',
      wind360Day: '90',
      windDirDay: 'E',
      windScaleDay: '1-2',
      windSpeedDay: '3',
      wind360Night: '90',
      windDirNight: 'E',
      windScaleNight: '1-2',
      windSpeedNight: '3',
      humidity: '81',
      precip: '1.0',
      pressure: '1025',
      vis: '24',
      cloud: '55',
      uvIndex: '1',
    },
    {
      fxDate: '2022-01-15',
      sunrise: '06:54',
      sunset: '17:14',
      moonrise: '14:48',
      moonset: '05:33',
      moonPhase: 'Waxing gibbous',
      moonPhaseIcon: '803',
      tempMax: '9',
      tempMin: '3',
      iconDay: '101',
      textDay: 'Cloudy',
      iconNight: '104',
      textNight: 'Overcast',
      wind360Day: '270',
      windDirDay: 'W',
      windScaleDay: '1-2',
      windSpeedDay: '3',
      wind360Night: '0',
      windDirNight: 'N',
      windScaleNight: '1-2',
      windSpeedNight: '3',
      humidity: '71',
      precip: '0.0',
      pressure: '1027',
      vis: '25',
      cloud: '25',
      uvIndex: '3',
    },
    {
      fxDate: '2022-01-16',
      sunrise: '06:53',
      sunset: '17:15',
      moonrise: '15:37',
      moonset: '06:24',
      moonPhase: 'Waxing gibbous',
      moonPhaseIcon: '803',
      tempMax: '8',
      tempMin: '3',
      iconDay: '305',
      textDay: 'Light Rain',
      iconNight: '305',
      textNight: 'Light Rain',
      wind360Day: '45',
      windDirDay: 'NE',
      windScaleDay: '3-4',
      windSpeedDay: '16',
      wind360Night: '45',
      windDirNight: 'NE',
      windScaleNight: '3-4',
      windSpeedNight: '16',
      humidity: '55',
      precip: '2.6',
      pressure: '1034',
      vis: '25',
      cloud: '65',
      uvIndex: '1',
    },
  ],
  refer: {
    sources: ['QWeather', 'NMC', 'ECMWF'],
    license: ['no commercial use'],
  },
};
