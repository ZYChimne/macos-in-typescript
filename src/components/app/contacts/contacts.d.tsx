import React from 'react';
import { AppLoads } from '../../../utils/utils.d';
export type ContactsProps = {
  show: boolean;
  setApp: React.Dispatch<AppLoads>;
};
export type ContactsInfo = {
  type: 'BUILDING' | 'NAME';
  mobile: string;
  homeEmail: string; //email
  homepage: string;
  birthday: string;
  homeAddress: string;
};
export const ContactsInfoList: { [key: string]: ContactsInfo } = {
  'Apple (China)': {
    type: 'BUILDING',
    mobile: '',
    homeEmail: '',
    homepage: 'https://www.apple.com.cn/',
    birthday: '',
    homeAddress: 'China Mainland',
  },
  'Evan Tseng': {
    type: 'NAME',
    mobile: '123456789',
    homeEmail: 'gazlayxyc@outlook.com',
    homepage: 'https://zychimne.github.io/',
    birthday: '2000/10/06',
    homeAddress: 'China Mainland',
  },
};
