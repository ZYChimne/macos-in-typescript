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
  imgFit: boolean;
  zoomOnClick: (event: React.MouseEvent, id: number) => void;
  switchOnWheel: (event: React.WheelEvent) => void;
  switchOnTouch: (event: React.PointerEvent) => void;
};
const SRC_PREFIX = `assets/photos/`;
export const PhotosList: PhotoType[] = [
  {
    src: SRC_PREFIX + `1C.jpg`,
    time: `20211231`,
    folder: 'All',
  },
  {
    src: SRC_PREFIX + `2C.jpg`,
    time: `20211231`,
    folder: 'All',
  },
  {
    src: SRC_PREFIX + `3C.jpg`,
    time: `20211231`,
    folder: 'All',
  },
  {
    src: SRC_PREFIX + `4C.jpg`,
    time: `20211231`,
    folder: 'All',
  },
  {
    src: SRC_PREFIX + `5C.jpg`,
    time: `20211231`,
    folder: 'All',
  },
  {
    src: SRC_PREFIX + `6C.jpg`,
    time: `20211231`,
    folder: 'All',
  },
  {
    src: SRC_PREFIX + `7C.jpg`,
    time: `20211231`,
    folder: 'All',
  },
  {
    src: SRC_PREFIX + `8C.jpg`,
    time: `20211231`,
    folder: 'All',
  },
  {
    src: SRC_PREFIX + `9C.jpg`,
    time: `20210831`,
    folder: 'All',
  },
  {
    src: SRC_PREFIX + `10C.jpg`,
    time: `20210831`,
    folder: 'All',
  },
  {
    src: SRC_PREFIX + `11C.jpg`,
    time: `20210630`,
    folder: 'All',
  },
  {
    src: SRC_PREFIX + `12C.jpg`,
    time: `20210630`,
    folder: 'All',
  },
  {
    src: SRC_PREFIX + `13C.jpg`,
    time: `20210630`,
    folder: 'All',
  },
  {
    src: SRC_PREFIX + `14C.jpg`,
    time: `20210630`,
    folder: 'All',
  },
  {
    src: SRC_PREFIX + `15C.jpg`,
    time: `20210630`,
    folder: 'All',
  },
  {
    src: SRC_PREFIX + `16C.jpg`,
    time: `20210331`,
    folder: 'All',
  },
  {
    src: SRC_PREFIX + `17C.jpg`,
    time: `20210331`,
    folder: 'All',
  },
  {
    src: SRC_PREFIX + `18C.jpg`,
    time: `20210331`,
    folder: 'All',
  },
  {
    src: SRC_PREFIX + `19C.jpg`,
    time: `20210331`,
    folder: 'All',
  },
  {
    src: SRC_PREFIX + `20C.jpg`,
    time: `20210331`,
    folder: 'All',
  },
  {
    src: SRC_PREFIX + `21C.jpg`,
    time: `20210228`,
    folder: 'All',
  },
  {
    src: SRC_PREFIX + `22C.jpg`,
    time: `20210228`,
    folder: 'All',
  },
  {
    src: SRC_PREFIX + `23C.jpg`,
    time: `20210228`,
    folder: 'All',
  },
  {
    src: SRC_PREFIX + `24C.jpg`,
    time: `20210228`,
    folder: 'All',
  },
  {
    src: SRC_PREFIX + `25C.jpg`,
    time: `20210228`,
    folder: 'All',
  },
  {
    src: SRC_PREFIX + `26C.jpg`,
    time: `20210131`,
    folder: 'All',
  },
  {
    src: SRC_PREFIX + `27C.jpg`,
    time: `20210131`,
    folder: 'All',
  },
  {
    src: SRC_PREFIX + `28C.jpg`,
    time: `20210131`,
    folder: 'All',
  },
  {
    src: SRC_PREFIX + `29C.jpg`,
    time: `20210131`,
    folder: 'All',
  },
  {
    src: SRC_PREFIX + `30C.jpg`,
    time: `20210131`,
    folder: 'All',
  },
  {
    src: SRC_PREFIX + `31C.jpg`,
    time: `20201231`,
    folder: 'All',
  },
  {
    src: SRC_PREFIX + `32C.jpg`,
    time: `20201231`,
    folder: 'All',
  },
  {
    src: SRC_PREFIX + `33C.jpg`,
    time: `20201231`,
    folder: 'All',
  },
  {
    src: SRC_PREFIX + `34C.jpg`,
    time: `20201231`,
    folder: 'All',
  },
  {
    src: SRC_PREFIX + `35C.jpg`,
    time: `20201231`,
    folder: 'All',
  },
  {
    src: SRC_PREFIX + `36C.jpg`,
    time: `20200630`,
    folder: 'All',
  },
  {
    src: SRC_PREFIX + `37C.jpg`,
    time: `20200630`,
    folder: 'All',
  },
  {
    src: SRC_PREFIX + `38C.jpg`,
    time: `20200630`,
    folder: 'All',
  },
  {
    src: SRC_PREFIX + `39C.jpg`,
    time: `20200630`,
    folder: 'All',
  },
  {
    src: SRC_PREFIX + `40C.jpg`,
    time: `20200630`,
    folder: 'All',
  },
  {
    src: SRC_PREFIX + `41C.jpg`,
    time: `20200301`,
    folder: 'All',
  },
  {
    src: SRC_PREFIX + `42C.jpg`,
    time: `20200301`,
    folder: 'All',
  },
  {
    src: SRC_PREFIX + `43C.jpg`,
    time: `20200301`,
    folder: 'All',
  },
  {
    src: SRC_PREFIX + `44C.jpg`,
    time: `20200301`,
    folder: 'All',
  },
  {
    src: SRC_PREFIX + `45C.jpg`,
    time: `20200301`,
    folder: 'All',
  },
  {
    src: SRC_PREFIX + `46C.jpg`,
    time: `20200301`,
    folder: 'All',
  },
  {
    src: SRC_PREFIX + `47C.jpg`,
    time: `20200228`,
    folder: 'All',
  },
  {
    src: SRC_PREFIX + `48C.jpg`,
    time: `20200228`,
    folder: 'All',
  },
  {
    src: SRC_PREFIX + `49C.jpg`,
    time: `20200228`,
    folder: 'All',
  },
  {
    src: SRC_PREFIX + `50C.jpg`,
    time: `20200228`,
    folder: 'All',
  },
  {
    src: SRC_PREFIX + `51C.jpg`,
    time: `20200214`,
    folder: 'All',
  },
  {
    src: SRC_PREFIX + `52C.jpg`,
    time: `20200214`,
    folder: 'All',
  },
  {
    src: SRC_PREFIX + `53C.jpg`,
    time: `20200214`,
    folder: 'All',
  },
  {
    src: SRC_PREFIX + `54C.jpg`,
    time: `20200214`,
    folder: 'All',
  },
  {
    src: SRC_PREFIX + `55C.jpg`,
    time: `20200131`,
    folder: 'All',
  },
  {
    src: SRC_PREFIX + `56C.jpg`,
    time: `20200131`,
    folder: 'All',
  },
  {
    src: SRC_PREFIX + `57C.jpg`,
    time: `20200131`,
    folder: 'All',
  },
  {
    src: SRC_PREFIX + `58C.jpg`,
    time: `20200101`,
    folder: 'All',
  },
  {
    src: SRC_PREFIX + `59C.jpg`,
    time: `20200101`,
    folder: 'All',
  },
  {
    src: SRC_PREFIX + `60C.jpg`,
    time: `20200101`,
    folder: 'All',
  },
];
