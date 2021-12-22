import React, { useReducer } from 'react';
import styles from './wallpaper.module.scss';
type WallpaperState = {
  src: string;
};
type WallpaperAction = {
  type: 'light' | 'dark';
};
const defaultWallpapers = {
  light: 'default/light.webp',
  dark: 'default/dark.webp',
};
export const wallpaperReducer = (
  state: WallpaperState,
  action: WallpaperAction
) => {
  switch (action.type) {
    case 'light':
      return { ...state, src: defaultWallpapers.light };
    case 'dark':
      return { ...state, src: defaultWallpapers.dark };
  }
};
export const Wallpaper = () => {
  const [wallpaper, setWallpaper] = useReducer(wallpaperReducer, {
    src: defaultWallpapers.light,
  });
  return (
    <div
      className={styles.wallpaper}
      style={{
        backgroundImage: `url(/assets/wallpapers/${wallpaper.src})`,
      }}
    />
  );
};
