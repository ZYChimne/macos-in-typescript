import React, { useReducer } from 'react'
import './wallpaper.scss'
type WallpaperState = {
  src: string
}
type WallpaperAction = {
  type: 'light' | 'dark'
}
const defaultWallpapers = {
  light: 'default/light.webp',
  dark: 'default/dark.webp',
}
export const wallpaperReducer = (
  state: WallpaperState,
  action: WallpaperAction
) => {
  switch (action.type) {
    case 'light':
      return { ...state, src: defaultWallpapers.light }
    case 'dark':
      return { ...state, src: defaultWallpapers.dark }
  }
}
const initialState: WallpaperState = {
  src: defaultWallpapers.light,
}
export const Wallpaper = () => {
  const [wallpaper, setWallpaper] = useReducer(wallpaperReducer, initialState)
  return (
    <div
      className="wallpaper"
      style={{
        backgroundImage: `url(/assets/wallpapers/${wallpaper.src})`,
      }}
    />
    // <img
    //   className='wallpaper'
    //   src='/assets/wallpapers/default/light.jpg'
    //   loading='lazy'
    //   alt=''
    // />
  )
}
