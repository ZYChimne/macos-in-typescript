import React from 'react';
import { isPropertySignature } from 'typescript';
import { Icon } from '../../utils/utlils';
import { LaunchpadApps, LaunchpadProps } from './launchpad.d';
import './launchpad.scss';
export const Launchpad = (props:LaunchpadProps) => {
    return (<div className='launchpad' data-show={props.show}>
        <div className='searchbar-container'>
            <input className='searchbar' type='text' placeholder='Search'/>
        </div>
        <div className='icon-container'>
            {
                LaunchpadApps.map((item, i) => { return i < 35 ? <Icon type='Launchpad' value={item} key={i} dispatch={props.setApp}/>:null;})
            }
        </div>
    </div>)
}