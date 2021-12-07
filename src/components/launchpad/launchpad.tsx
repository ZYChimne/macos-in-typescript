import React, { useReducer, useState } from 'react';
import { start } from 'repl';
import { Icon } from '../../utils/utlils';
import {
  ContainerAction,
  ContainerState,
  IconLineContainerProps,
  LaunchpadApps,
  LaunchpadProps,
} from './launchpad.d';
import './launchpad.scss';
export const Launchpad = (props: LaunchpadProps) => {
  let length = LaunchpadApps.length;
  const [start, setStart] = useState(0);
  const switchIconContainer = (event: React.WheelEvent) => {
    if (event.deltaY < 0 && start > 0) {
      setStart(start - 35);
    } else if (event.deltaY > 0 && start + 35 < length) {
      setStart(start + 35);
    }
  };
  const IconLineContainer = (props: IconLineContainerProps) => {
    return (
      <div className='icon-line-container'>
        {LaunchpadApps.slice(props.start, props.start + 7).map((item, i) => {
          return (
            <Icon
              type='Launchpad'
              value={item}
              key={i}
              dispatch={props.setApp}
            />
          );
        })}
      </div>
    );
  };
  return (
    <div
      className='launchpad'
      data-show={props.show}
      onWheel={(event) => switchIconContainer(event)}
    >
      <div className='searchbar-container'>
        <input className='searchbar' type='text' placeholder='Search' />
      </div>
      <div className='icon-container'>
        <IconLineContainer start={start} setApp={props.setApp} />
        <IconLineContainer start={start + 7} setApp={props.setApp} />
        <IconLineContainer start={start + 14} setApp={props.setApp} />
        <IconLineContainer start={start + 21} setApp={props.setApp} />
        <IconLineContainer start={start + 28} setApp={props.setApp} />
      </div>
    </div>
  );
};
