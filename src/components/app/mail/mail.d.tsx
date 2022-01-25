import React from 'react';
import { AppStateAction } from '../../../utils/utils.d';
export type MailProps = {
  state: number;
  setApp: React.Dispatch<AppStateAction>;
};
