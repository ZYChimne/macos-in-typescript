import React from 'react';
import { AppLoads } from '../../utils/utils.d';
export type LaunchpadProps = {
  show: boolean;
  setApp: React.Dispatch<AppLoads>;
};
export type IconPageContainerProps = {
  start: number;
  index: number;
  setApp: React.Dispatch<AppLoads>;
};
export type IconLineContainerProps = {
  start: number;
  setApp: React.Dispatch<AppLoads>;
};
export const LaunchpadApps: string[] = [
  'books',
  'booth',
  'calculator',
  'calendar',
  'compressor',
  'contacts',
  'cut',
  'dictionary',
  'excel',
  'facetime',
  'final',
  'find',
  'finder',
  'gara',
  'github',
  'home',
  'keynote',
  'logic',
  'mail',
  'maps',
  'monitor',
  'music',
  'news',
  'notes',
  'numbers',
  'onenote',
  'outlook',
  'pages',
  'photos',
  'podcasts',
  'powerpoint',
  'preferences',
  'preview',
  'reminders',
  'safari',
  'screenshot',
  'siri',
  'stickies',
  'store',
  'swift',
  'terminal',
  'textedit',
  'time',
  'vscode',
  'wechat',
  'word',
  'xcode',
];
