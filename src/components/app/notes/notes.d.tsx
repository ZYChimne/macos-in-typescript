import React from 'react';
import { AppLoads } from '../../../utils/utils.d';
import { MDContent1 } from './notes.c';
export type NotesProps = {
  show: boolean;
  setApp: React.Dispatch<AppLoads>;
};
export type NoteType = {
  id: number;
  title: string;
  time: string;
  date: string;
  folder: string;
  content: string;
};
export const NotesList: NoteType[] = [
  {
    id: 0,
    title: `macOS in TypeScript`,
    time: `3: 51 PM`,
    date: `1.15`,
    folder: `Notes`,
    content: MDContent1,
  },
];
