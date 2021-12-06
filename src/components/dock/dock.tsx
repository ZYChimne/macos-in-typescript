import React from 'react';
import { Icon } from '../../utils/utlils';
import { DockApps, DockProps } from './dock.d';
import './dock.scss';
export const Dock = (props: DockProps) => {
  return (
    <div className='dock'>
          <Icon type='Dock' value='finder' dispatch={props.setApp}/>
          <Icon type='Dock' value='launchpad' dispatch={props.setApp}/>
          {DockApps.map((item, i) => {
              return <Icon type='Dock' value={item} key={i} dispatch={props.setApp}/>;
          })       
      }
    </div>
  );
};
