import React from 'react';
export type SwitchProps = {
  id: string;
  onClick: Function;
  state: boolean;
};
export type IconProps = {
  value: string;
  type: 'Dock'|'Desktop'|'Launchpad';
};
export type PopoverProps = {
  text: string;
};
export type AppLoads = 'None';
