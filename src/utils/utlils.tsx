import React from 'react';
import { SwitchProps } from './utils.d'
import './utils.scss'

export const Switch = (props: SwitchProps) => {
    return (<div className='switch-label'><input className='switch-input' type='checkbox' id={props.id} /><label className='switch-core' htmlFor={props.id}/></div>)
}