import React from 'react';
import { AppLoads } from '../../../utils/utils.d';
export type MapsProps = {
  show: boolean;
  setApp: React.Dispatch<AppLoads>;
};
export type MapLineProps = {
  name: string;
  type: LocType;
  lng: number;
  lat: number;
  id: number;
  setLOC: () => void;
};
export type LocType =
  | 'Home'
  | 'Work'
  | 'School'
  | 'Spot'
  | 'Store'
  | 'Traffic'
  | 'Museum'
  | 'Hotel'
  | 'Restaurant'
  | 'Park';
export type MapInfoType = {
  name: string;
  lng: number;
  lat: number;
  type: LocType;
};
export const MapInfo: MapInfoType[] = [
  { name: 'Tomson Riviera', lng: 121.508506, lat: 31.238794, type: 'Home' },
  { name: 'Wuhan Unversity', lng: 114.372921, lat: 30.543803, type: 'School' },
  { name: 'Sensetime', lng: 121.40627, lat: 31.174082, type: 'Work' },
  { name: 'The Bund', lng: 121.497204, lat: 31.243453, type: 'Spot' },
  { name: 'Huanmao iAPM', lng: 121.464963, lat: 31.222021, type: 'Store' },
  { name: 'Xujiahui', lng: 121.443228, lat: 31.200668, type: 'Traffic' },
  { name: 'China Art Museum', lng: 121.500985, lat: 31.189781, type: 'Museum' },
  { name: 'Peace Hotel', lng: 121.496053, lat: 31.244676, type: 'Hotel' },
  { name: 'Xinrongji', lng: 121.504045, lat: 31.233102, type: 'Restaurant' },
  { name: "People's Square", lng: 121.481099, lat: 31.238688, type: 'Park' },
];
