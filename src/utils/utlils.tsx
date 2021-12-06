import React from 'react';
import { AppList } from './AppList';
import { AppLoads, AppState, IconProps, SwitchProps } from './utils.d';
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
    switch (props.type) {
        case 'Dock':return (
          <div
            className='icon'
            data-tooltip={AppList[props.value].name}
            data-type={props.type}
          >
            <img
              className='icon-img'
              src={'/assets/icons/apps/' + AppList[props.value].ctx + '.png'}
              alt=''
              data-type={props.type}
              onClick={() => props.dispatch(AppList[props.value].load)}
            />
          </div>
        );
        case 'Desktop':return (
          <div className='icon' data-type={props.type}>
            <img
              className='icon-img'
              src={'/assets/icons/apps/' + AppList[props.value].ctx + '.png'}
              alt=''
              data-type={props.type}
              onClick={() => props.dispatch(AppList[props.value].load)}
            />
          </div>
        );
        case 'Launchpad':return (
          <div className='icon' data-type={props.type}>
            <img
              className='icon-img'
              src={'/assets/icons/apps/' + AppList[props.value].ctx + '.png'}
                    alt=''
                    onClick={()=>props.dispatch(AppList[props.value].load)}
              data-type={props.type}
            />
            <div className='icon-text'>{AppList[props.value].name}</div>
          </div>
        );
        default: return null;
    }
}

export const appReducer =(state:AppState, type:AppLoads):AppState=>{
    switch (type) {
        case 'None': return { ...state, showLaunchpad: false };
        case 'Launchpad': return { ...state, showLaunchpad: !state.showLaunchpad };
        default: return { ...state };
    }
}