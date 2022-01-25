import React from 'react';
import { AppState, AppStateAction } from '../../utils/utils.d';
export type DockProps = {
  appState: AppState;
  setApp: React.Dispatch<AppStateAction>;
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
