import React from 'react';
import { AppLoads } from '../../../utils/utils.d';
export type FinderProps = {
  show: boolean;
  setApp: React.Dispatch<AppLoads>;
};
export const FinderData = [
  {
    name: 'Library',
    type: 'FOLDER',
    children: [
      {
        name: 'Apple',
        type: 'FOLDER',
        children: [
          { name: 'Library', type: 'FOLDER', children: [] },
          { name: 'System', type: 'FOLDER', children: [] },
          { name: 'Usr', type: 'FOLDER', children: [] },
        ],
      },
      {
        name: 'Documentation',
        type: 'FOLDER',
        children: [
          { name: 'Acknowledgements.rtf', type: 'DOC', children: [] },
          { name: 'License.pdf', type: 'DOC', children: [] },
          { name: 'Warranty.rtf', type: 'DOC', children: [] },
        ],
      },
      {
        name: 'Fonts',
        type: 'FOLDER',
        children: [],
      },
    ],
  },
  {
    name: 'System',
    type: 'FOLDER',
    children: [
      {
        name: 'DriverKit',
        type: 'FOLDER',
        children: [
          { name: 'Runtime', type: 'FOLDER', children: [] },
          { name: 'System', type: 'FOLDER', children: [] },
          { name: 'Usr', type: 'FOLDER', children: [] },
        ],
      },
      { name: 'iOSSupport', type: 'FOLDER', children: [] },
      {
        name: 'Volumes',
        type: 'FOLDER',
        children: [
          { name: 'BaseSystem', type: 'FOLDER', children: [] },
          { name: 'FieldService', type: 'FOLDER', children: [] },
          { name: 'Hardware', type: 'FOLDER', children: [] },
        ],
      },
    ],
  },
  {
    name: 'Users',
    type: 'FOLDER',
    children: [
      {
        name: 'Cirilla',
        type: 'FOLDER',
        children: [
          {
            name: 'Desktop',
            type: 'FOLDER',
            children: [
              { name: 'macOS-Screenshot.png', type: 'PIC', children: [] },
              { name: 'Thankyou-Notes.docx', type: 'DOC', children: [] },
              { name: 'Travel', type: 'FOLDER', children: [] },
            ],
          },
          {
            name: 'Documents',
            type: 'FOLDER',
            children: [
              { name: 'Memories.docx', type: 'DOC', children: [] },
              { name: 'Love-Letter.pdf', type: 'DOC', children: [] },
              { name: 'Titanic.mp4', type: 'VIDEO', children: [] },
            ],
          },
          {
            name: 'Downloads',
            type: 'FOLDER',
            children: [
              { name: 'Inception.mp4', type: 'VIDEO', children: [] },
              { name: 'Innocense.mp4', type: 'MUSIC', children: [] },
              { name: 'Wallpaper.png', type: 'PIC', children: [] },
            ],
          },
          {
            name: 'Movies',
            type: 'FOLDER',
            children: [
              {
                name: 'The-Shawshank-Redemption.mp4',
                type: 'VIDEO',
                children: [],
              },
              {
                name: 'Farewell-My-Concubine.mp4',
                type: 'VIDEO',
                children: [],
              },
              { name: 'Forrest-Gump.mp4', type: 'VIDEO', children: [] },
            ],
          },
          {
            name: 'Music',
            type: 'FOLDER',
            children: [
              { name: 'All-of-Me.mp3', type: 'MUSIC', children: [] },
              { name: 'Lost-Stars.mp3', type: 'MUSIC', children: [] },
              { name: 'Someday.mp3', type: 'MUSIC', children: [] },
            ],
          },
          {
            name: 'Pictures',
            type: 'FOLDER',
            children: [
              { name: 'The-Bund.png', type: 'PIC', children: [] },
              { name: 'Peace-Hotel.png', type: 'PIC', children: [] },
              { name: 'People-Square.png', type: 'PIC', children: [] },
            ],
          },
        ],
      },
      { name: 'Shared', type: 'FOLDER', children: [] },
    ],
  },
];
export type FinderIconProps = {
  name: string;
  type: FinderIconType;
  children: any;
  setFinderContent: (finderData: any, path: string) => void;
};
export type FinderIconType = 'FOLDER' | 'DOC' | 'MUSIC' | 'PIC' | 'VIDEO';
