import { MenubarPanelAction } from '../menubar/menubar.d';

export const Wallpapers = {
  light: 'default/lightC.jpeg',
  dark: 'default/darkC.jpeg',
};
export type WallpaperProps = {
  dark: boolean;
  menubarPanelDispatcher: React.Dispatch<MenubarPanelAction>;
};
