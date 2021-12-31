import React from 'react';
import { AppLoads } from '../../../utils/utils.d';
export type PreferencesProps = {
  show: boolean;
  setApp: React.Dispatch<AppLoads>;
};
export type PreferencesContentType =
  | 'Overview'
  | 'Displays'
  | 'Storage'
  | 'Support'
  | 'About';
export type PreferencesContentProps = {
  contentType: PreferencesContentType;
};
export type StoragStatus = {
  apps: number;
  documents: number;
  developer: number;
  trash: number;
  music: number;
  macOS: number;
  system: number;
  available: number;
};
export const AboutContent: string = `This is my graduation capstone project for School of Computer Science, Wuhan University. 
This project is written in React and Typescript, and it involves creating web components from the scratch. 
I'd been wondering what to do for my capstone project, and I kept asking myself, "Is there anything entertaining and challenging?" 
The idea occurred to me as a result of Win11React. This is my first time using TypeScript and React, and it hasn't been simple. 
I make it thanks to the support of my excellent front-end colleagues at Sensetime, Zequn Zhang and Zheng Chen. You can access the source code of the project on my github: `;
export const SupportText: string = `Service is limited to the options available in the country where you request service. 
Service options, Support availability and response times may vary. Coverage status and expiration date are estimated.
Your warranty is the same whether or not you register. Learn about Apple’s coverage information for your product...`;
export const SupportImportant: string = `Important: Apple’s Limited Warranty and AppleCare product benefits are in addition to rights provided by consumer law. 
If you believe you have a valid consumer law claim, please contact us. See details...`;
