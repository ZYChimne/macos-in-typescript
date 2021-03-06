import React from 'react';
import { AppStateAction } from '../../../utils/utils.d';
export type RemindersProps = {
  state: number;
  setApp: React.Dispatch<AppStateAction>;
  curTag: string;
  setCurTag: React.Dispatch<React.SetStateAction<string>>;
};
export const TagColors: { [key: string]: string } = {
  Today: `rgb(48, 123, 246)`,
  Scheduled: `rgb(236, 77, 61)`,
  All: `rgb(92, 98, 105)`,
  Flagged: `rgb(241, 153, 56)`,
};
export type RemindersEvent = {
  date: string;
  title: string;
  subtitle: string;
};
export const RemindersEvents: {
  [key: string]: RemindersEvent[];
} = {
  Today: [
    { date: '20210101', title: 'Have Fun', subtitle: 'Have Fun' },
    { date: '20210101', title: 'Have Fun', subtitle: 'Have Fun' },
    { date: '20210101', title: 'Have Fun', subtitle: 'Have Fun' },
  ],
  Scheduled: [
    { date: '20210102', title: 'Have Fun', subtitle: 'Have Fun' },
    { date: '20210102', title: 'Have Fun', subtitle: 'Have Fun' },
    { date: '20210102', title: 'Have Fun', subtitle: 'Have Fun' },
  ],
  Flagged: [
    { date: '20210103', title: 'Have Fun', subtitle: 'Have Fun' },
    { date: '20210103', title: 'Have Fun', subtitle: 'Have Fun' },
    { date: '20210103', title: 'Have Fun', subtitle: 'Have Fun' },
  ],
};
