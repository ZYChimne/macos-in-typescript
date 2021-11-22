import React from 'react';
import './utils.scss'

export const Switch = () => {
    return (<div className='switch-label'><input className='switch-input' type='checkbox' id='switch'/><label className='switch-core' htmlFor='switch'/></div>)
}