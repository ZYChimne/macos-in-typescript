import React from 'react';
import { AppLoads } from '../../../utils/utils.d';
export type PhotosProps = {
  show: boolean;
  setApp: React.Dispatch<AppLoads>;
};
export type PhotoType = {
  src: string;
  time: string;
  folder: string;
};
export type ImageState = {
  initialWidth: number;
  initialHeight: number;
  finalWidth: number;
  finalHeight: number;
  initialLeft: number;
  initialTop: number;
  finalLeft: number;
  finalTop: number;
};
export type PhotosContentProps = {
  id: number;
  imgLeft: number;
  imgTop: number;
  imgWidth: number;
  imgHeight: number;
  zoomOnClick: (event: React.MouseEvent, id: number) => void;
};
export const PhotosList: PhotoType[] = [
  {
    src: `assets/wallpapers/default/lightC.jpeg`,
    time: `2021/12/31`,
    folder: 'All',
  },
  {
    src: `assets/wallpapers/default/darkC.jpeg`,
    time: `2021/12/31`,
    folder: 'All',
  },
];
