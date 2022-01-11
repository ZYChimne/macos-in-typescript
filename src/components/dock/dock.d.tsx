import React from 'react';
import { AppLoads, AppState } from '../../utils/utils.d';
export type DockProps = {
  appState: AppState;
  setApp: React.Dispatch<AppLoads>;
};
export const DockApps: string[] = [
  'safari',
  'mail',
  'maps',
  'photos',
  'contacts',
  'reminders',
  'notes',
  'music',
  'preferences',
  'siri',
];
