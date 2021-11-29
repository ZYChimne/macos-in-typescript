import React from 'react';
import { BlockLike } from 'typescript';
export type HeaderProps = {
  state: string;
  headerPanelDispatcher: React.Dispatch<HeaderPanelAction>;
};
export type PanelProps = {
  show: boolean;
};
export type InputPanelLineProps = {
  state: string;
  checked: boolean;
  dispatch: React.Dispatch<React.SetStateAction<string>>;
};
export type HeaderPanelStates = {
  showWifi: boolean;
  showBattery: boolean;
  showInput: boolean;
};
export type HeaderPanelAction = {
  type: 'Hide' | 'ShowWifi' | 'ShowBattery' | 'ShowInput';
};
export const InputLanguages: { [key: string]: string } = {
  Pinyin: 'Pinyin - Simplified',
  English: 'English',
  French: 'French',
};
export const HeaderItems: { [key: string]: string[] } = {
  Finder: ['Finder', 'File', 'Edit', 'View', 'Go', 'Window', 'Help'],
  Map: ['Finder', 'File', 'Edit', 'View', 'Go', 'Window', 'Help'],
};
