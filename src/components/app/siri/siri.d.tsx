import React from 'react';
export type SiriCanvasProps = {
  height: number;
  width: number;
  points: number;
  radius: number;
  rangeMin: number;
  rangeMax: number;
  onPhase: number;
  onSpeed: number;
  offPhase: number;
  offSpeed: number;
  onClick: React.Dispatch<React.SetStateAction<boolean>>;
  on: boolean;
};
export type SwingPoint = {
  x: number;
  y: number;
  radian: number;
  range: number;
  phase: number;
};
export type SiriProps = {
  show: boolean;
};
