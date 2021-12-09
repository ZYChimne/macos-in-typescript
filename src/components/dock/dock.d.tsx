import React from 'react';
import { AppLoads } from '../../utils/utils.d';
export type DockProps = {
  setApp: React.Dispatch<AppLoads>;
};
export const DockApps: string[] = [
  'safari',
  'mail',
  'maps',
  'photos',
  'calendar',
  'contacts',
  'reminders',
  'notes',
  'music',
  'store',
  'preferences',
  'siri',
];
