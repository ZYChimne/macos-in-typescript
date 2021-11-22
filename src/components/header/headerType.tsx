import React from 'react';
export type HeaderState = {
    state: string;
};
export type LanguageState = {
  state: string;
};
export type HeaderAction = {
  type: 'FINDER' | 'MAP';
};
export type LanguageAction = {
  type: 'English' | 'Pinyin';
};
export type InputPanelLineProps = {
  text: string;
  state: string;
  checked: boolean;
};
export const initialHeaderState:HeaderState = {
    state: 'Finder',
};
export const initialLanguageState:LanguageState = {
  state: 'Pinyin',
};
export const InputLanguages = {
    'Pinyin': {
        state: 'Pinyin',
        text: 'Pinyin - Simplified'
    },
    'English': {
        state: 'Pinyin',
        text: 'Pinyin - Simplified'
    }
};
export const HeaderItems: {[key: string]:string[]}= {
  'Finder': ['Finder', 'File', 'Edit', 'View', 'Go', 'Window', 'Help'],
  'Map': ['Finder', 'File', 'Edit', 'View', 'Go', 'Window', 'Help'],
};