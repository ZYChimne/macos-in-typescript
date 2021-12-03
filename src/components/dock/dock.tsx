import React from 'react';
import { Icon } from '../../utils/utlils';
import { DockApps } from './dock.d';
import './dock.scss';
export const Dock = () => {
  return (
    <div className='dock'>
      <Icon type='Dock' value='finder' />
      <Icon type='Dock' value='launchpad' />
          {DockApps.map((item, i) => {
              return <Icon type='Dock' value={item} key={i}/>;
          })       
      }
    </div>
  );
};
