import React from 'react';
import { MenubarPanelAction } from '../menubar/menubar.d';
import styles from './wallpaper.module.scss';
const Wallpapers = {
  light: 'default/lightC.jpeg',
  dark: 'default/darkC.jpeg',
};
export const Wallpaper = ({
  dark,
  menubarPanelDispatcher,
}: {
  dark: boolean;
  menubarPanelDispatcher: React.Dispatch<MenubarPanelAction>;
}) => {
  return (
    <div
      className={styles.wallpaper}
      style={{
        backgroundImage: `url(/assets/wallpapers/${
          dark ? Wallpapers.dark : Wallpapers.light
        })`,
      }}
      onClick={() => menubarPanelDispatcher('Hide')}
    />
  );
};
