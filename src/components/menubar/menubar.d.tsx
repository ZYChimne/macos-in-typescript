import React from 'react';
export type MenubarProps = {
  state: string;
  menubarPanelDispatcher: React.Dispatch<MenubarPanelAction>;
  menubarState: MenubarPanelStates;
};
export type PanelProps = {
  show: boolean;
  state: boolean;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
};
export type SimplePanelProps = {
  show: boolean;
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
};
export type InputPanelLineProps = {
  state: string;
  checked: boolean;
  dispatch: React.Dispatch<React.SetStateAction<string>>;
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
  Map: ['Finder', 'File', 'Edit', 'View', 'Go', 'Window', 'Help'],
};
export const MusicList: { title: string; singer: string; album: string }[] = [
  { title: 'Roling in the Deep', singer: 'Adele', album: '21' },
  { title: 'Scientist', singer: 'OneRepublic', album: '21' },
  { title: 'Roling', singer: 'Adele', album: '21' },
  { title: 'Roling Deep', singer: 'Adele', album: '21' },
  { title: 'the Deep', singer: 'Adele', album: '21' },
  { title: 'Back to December', singer: 'Adele', album: '21' },
  { title: 'Roling in', singer: 'Adele', album: '21' },
  { title: 'the Deep Hole', singer: 'Adele', album: '21' },
  { title: 'Deep', singer: 'Adele', album: '21' },
  { title: 'in', singer: 'Adele', album: '21' },
];