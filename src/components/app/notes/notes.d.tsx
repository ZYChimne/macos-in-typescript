import React from 'react';
import { AppLoads } from '../../../utils/utils.d';
import { MDCONTENT1, MDCONTENT2, MDCONTENT3, MDCONTENT4 } from './notes.c';
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
    time: `15:00`,
    date: `20210103`,
    folder: `Notes`,
    content: MDCONTENT1,
  },
  {
    id: 1,
    title: `Readme React`,
    time: `12:00`,
    date: `20210102`,
    folder: `Readmes`,
    content: MDCONTENT2,
  },
  {
    id: 2,
    title: `Readme Typescript`,
    time: `06:00`,
    date: `20210101`,
    folder: `Readmes`,
    content: MDCONTENT3,
  },
  {
    id: 3,
    title: `Readme Sass`,
    time: `23:59`,
    date: `20201231`,
    folder: `Readmes`,
    content: MDCONTENT4,
  },
];
