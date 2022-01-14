import React from 'react';
import { WallpaperProps, Wallpapers } from './wallpaper.d';
import styles from './wallpaper.module.scss';

export const Wallpaper = (props: WallpaperProps) => {
  return (
    <div
      className={styles.wallpaper}
      style={{
        backgroundImage: `url(/assets/wallpapers/${
          props.dark ? Wallpapers.dark : Wallpapers.light
        })`,
      }}
      onClick={() => props.menubarPanelDispatcher('Hide')}
    />
  );
};
