import React, { useReducer } from "react";
import "./wallpaper.scss";
interface WallpaperState {
  src: string;
}
interface WallpaperAction {
  type: "light" | "dark";
}
const defaultWallpapers = {
  light: "default/light.jpg",
  dark: "default/dark.jpg",
};
const mountainWallpapers = {
  light: "mountains/light.jpg",
  dark: "mountains/dark.jpg",
  four: "mountains/four.jpg",
  six: "mountains/six.jpg",
  fifteen: "mountains/fifteen.jpg"
};
export const wallpaperReducer = (
  state: WallpaperState,
  action: WallpaperAction
) => {
  switch (action.type) {
    case "light":
      return { ...state, src: defaultWallpapers.light };
    case "dark":
      return { ...state, src: defaultWallpapers.dark };
  }
};
const initialState: WallpaperState = {
  src: defaultWallpapers.light,
};
export const Wallpaper = () => {
  const [wallpaper, setWallpaper] = useReducer(wallpaperReducer, initialState);
  return (
    <div
      className="wallpaper"
      style={{ backgroundImage: `url(/assets/wallpapers/${wallpaper.src})` }}
    />
  );
};
