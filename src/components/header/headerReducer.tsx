import React from 'react';
import { HeaderAction, HeaderState, LanguageAction, LanguageState } from './headerType';
export const headerReducer = (headerState: HeaderState, action: HeaderAction): HeaderState => {
  switch (action.type) {
    case 'FINDER':
      return {
        ...headerState,
      };
    case 'MAP':
      return {
        ...headerState,
      };
  }
};
export const languageReducer = (
  languageState: LanguageState,
  action: LanguageAction
) => {
  switch (action.type) {
    case 'English':
      return { ...languageState, state: 'English' };
    case 'Pinyin':
      return { ...languageState, state: 'Pinyin' };
  }
};
