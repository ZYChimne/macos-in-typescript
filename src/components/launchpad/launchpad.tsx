import React, { useReducer, useState } from 'react';
import { Icon } from '../../utils/utlils';
import {
  IconLineContainerProps,
  IconPageContainerProps,
  LaunchpadApps,
  LaunchpadProps,
} from './launchpad.d';
import './launchpad.scss';
export const Launchpad = (props: LaunchpadProps) => {
  const [page, setPage] = useState(0);
  const switchIconContainer = (event: React.WheelEvent) => {
    if (event.deltaY < 0 && page > 0) {
      setPage(page - 1);
    } else if (event.deltaY > 0 && page < 1) {
      setPage(page + 1);
    }
  };
  const IconPageContainer = (props: IconPageContainerProps) => {
    return (
      <div className="icon-page-container" data-index={props.index}>
        <div className="icon-container">
          <IconLineContainer start={props.start} setApp={props.setApp} />
          <IconLineContainer start={props.start + 7} setApp={props.setApp} />
          <IconLineContainer start={props.start + 14} setApp={props.setApp} />
          <IconLineContainer start={props.start + 21} setApp={props.setApp} />
          <IconLineContainer start={props.start + 28} setApp={props.setApp} />
        </div>
      </div>
    );
  };
  const IconLineContainer = (props: IconLineContainerProps) => {
    return (
      <div className="icon-line-container">
        {LaunchpadApps.slice(props.start, props.start + 7).map((item, i) => {
          return (
            <Icon
              type="Launchpad"
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
      className="launchpad"
      data-show={props.show}
      onWheel={(event) => switchIconContainer(event)}
    >
      <div className="searchbar-container">
        <input className="searchbar" type="text" placeholder="Search" />
      </div>
      <div className="icon-container-track" data-page={page}>
        <IconPageContainer setApp={props.setApp} index={0} start={0} />
        <IconPageContainer setApp={props.setApp} index={1} start={35} />
      </div>
      <div className="dot-container">
        <div className="dot" data-active={page === 0 ? true : false} />
        <div className="dot" data-active={page === 1 ? true : false} />
      </div>
    </div>
  );
};
