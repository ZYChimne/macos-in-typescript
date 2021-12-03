import React from 'react';
import { AppList } from './AppList';
import { IconProps, PopoverProps, SwitchProps } from './utils.d';
import './utils.scss';

export const Switch = (props: SwitchProps) => {
  return (
    <div className='switch'>
      <input
        className='switch-input'
        type='checkbox'
        id={props.id}
        checked={props.state}
        onChange={() => props.onClick(!props.state)}
      />
      <label className='switch-core' htmlFor={props.id} />
    </div>
  );
};

export const Icon = (props: IconProps) => {
    if(!(props.value in AppList))console.log(props.value);
    return (
      <div className='icon'>
        <Popover text={AppList[props.value].name} />
        <img className='icon-img'
          src={'/assets/icons/apps/' + AppList[props.value].ctx + '.png'}
          alt=''
        />
            {props.type==='Dock'?null:<div className='icon-text'>{AppList[props.value].name}</div>}
      </div>
    );
}

export const Popover = (props: PopoverProps) => {
    return null;
}