import React from 'react';
import { AppStateAction } from '../../../utils/utils.d';
export type ContactsProps = {
  state: number;
  setApp: React.Dispatch<AppStateAction>;
  curContact: string;
  setCurContact: React.Dispatch<React.SetStateAction<string>>;
};
export type ContactType = 'home' | 'work' | 'school' | 'other';
export type ContactInfo = { type: ContactType; content: string };
export type ContactsInfo = {
  type: 'BUILDING' | 'NAME';
  phone: string;
  email: ContactInfo[];
  homepage: string;
  birthday: string;
  address: ContactInfo[];
};
export type ContactsContentProps = {
  id: string;
};
export type ContactsLineProps = {
  title: string;
  text: string;
};
export const ContactsInfoList: { [key: string]: ContactsInfo } = {
  'Apple (China)': {
    type: 'BUILDING',
    phone: '+86 400 627 2273',
    email: [],
    homepage: 'https://www.apple.com.cn/',
    birthday: '',
    address: [{ type: 'work', content: 'China Mainland' }],
  },
  'Evan Tseng': {
    type: 'NAME',
    phone: '123 456 789',
    email: [{ type: 'work', content: 'gazlayxyc@outlook.com' }],
    homepage: 'https://zychimne.github.io/',
    birthday: '2000/10/06',
    address: [{ type: 'school', content: 'Wuhan University' }],
  },
};
