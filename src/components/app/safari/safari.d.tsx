import React from 'react';
import { AppStateAction } from '../../../utils/utils.d';
export type SafariProps = {
  state: number;
  setApp: React.Dispatch<AppStateAction>;
};
