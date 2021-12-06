import React from 'react';
export type SwitchProps = {
  id: string;
  onClick: Function;
  state: boolean;
};
export type IconProps = {
  value: string;
    type: 'Dock' | 'Desktop' | 'Launchpad';
    dispatch: React.Dispatch<AppLoads>;
};
export type AppState={
    showLaunchpad: boolean;
}
export type AppLoads = 'None'|'Launchpad';
