import React from 'react';
import { AppLoads } from '../../../utils/utils.d';
export type RemindersProps = {
  show: boolean;
  setApp: React.Dispatch<AppLoads>;
};
export type TagContainerProps = {
  id: string;
  curTag: string;
  setCurTag: (value: React.SetStateAction<string>) => void;
};
export const TagColors: { [key: string]: string } = {
  Today: `rgb(48, 123, 246)`,
  Scheduled: `rgb(236, 77, 61)`,
  All: `rgb(92, 98, 105)`,
  Flagged: `rgb(241, 153, 56)`,
};
