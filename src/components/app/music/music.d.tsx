import React from 'react';
import { AppLoads } from '../../../utils/utils.d';
export type MusicProps = {
  show: boolean;
  setApp: React.Dispatch<AppLoads>;
  musicList: any;
  playMusic: () => void;
  playOnIndex: (index: number) => void;
  playPrev: () => void;
  playNext: () => void;
};
export type MusicInfo = {
  title: string;
  singers: string[];
  album: string;
  playing: boolean;
  no: number;
};
export type MusicLineProps = {
  title: string;
  singers: string[];
  album: string;
  playing: boolean;
  onClick: () => void;
};
export const MusicList = [
  '000NbrvJ2RJ73B', // Lost Stars
  '000zGFHg3JQ0Hv', // All of Me
  '004TKV421wcM62', // Make You Feel My Love
  '002L8xPl1QOi4i', // Innocence
  '003SD4732yq1lf', // Someday
  '001shXPu4IlWWb', // Cheap Thrills
  '003dtkNk26WhJD', // 富士山下
  '002cW0Rt0E6HV0', // 喜帖街
  '004FEV6D1yMdSj', // 野孩子
  '004ZSAk32f2M8z', // 披星戴月
  '000tLM0a2YKyLO', // 岁月神偷
  '004gaUdP3lE49S', // 小酒窝
  '001zgoLn3UZwoX', // 小幸运
  '003Xsmq21ksC54', // 知足
  '001X0PDf0W4lBq', // 泡沫
];
