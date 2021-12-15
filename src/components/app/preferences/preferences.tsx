import React, { useState } from 'react';
import { AppBarButton } from '../../../utils/utlils';
import {
  PreferencesContentProps,
  PreferencesContentType,
  PreferencesProps,
} from './preferences.d';
import './preferences.scss';

export const Preferences = (props: PreferencesProps) => {
  const [contentType, setContentType] =
    useState<PreferencesContentType>('Overview');
  return (
    <div className="Preferences" data-show={props.show}>
      <div className="appbar-container">
        <div className="appbar-container-left">
          <AppBarButton />
        </div>
        <div className="appbar-container-center">
          <div
            className="appbar-container-btn"
            data-active={contentType === 'Overview'}
            onClick={() => setContentType('Overview')}
          >
            Overview
          </div>
          <div
            className="appbar-container-btn"
            data-active={contentType === 'Displays'}
            onClick={() => setContentType('Displays')}
          >
            Displays
          </div>
          <div
            className="appbar-container-btn"
            data-active={contentType === 'Storage'}
            onClick={() => setContentType('Storage')}
          >
            Storage
          </div>
          <div
            className="appbar-container-btn"
            data-active={contentType === 'Support'}
            onClick={() => setContentType('Support')}
          >
            Support
          </div>
          <div
            className="appbar-container-btn"
            data-active={contentType === 'Resources'}
            onClick={() => setContentType('Resources')}
          >
            Resources
          </div>
        </div>
      </div>
      <PreferenceContent contentType={contentType} />
    </div>
  );
};
const PreferenceContent = (props: PreferencesContentProps) => {
  switch (props.contentType) {
    case 'Overview':
      return (
        <div className="overview-container">
          <div className="overview-content">
            <div className="overview-left">
              <img
                className="overview-img"
                src="/assets/icons/macos.png"
                alt=""
                loading="lazy"
              />
            </div>
            <div className="overview-right">
              <div className="overview-right-line1">
                <div className="overview-right-line-container">
                  <div className="overview-title">macOS</div>
                  <div className="overview-subtitle">Big Sur</div>
                </div>
                <div className="overview-right-line-value">Version 11.0</div>
              </div>
              <div className="overview-right-line2">
                <div className="overview-right-line-container">
                  <div className="overview-right-line-name">
                    MacBook Pro (16-inch, 2021)
                  </div>
                </div>
                <div className="overview-right-line-container">
                  <div className="overview-right-line-name">Processor</div>
                  <div className="overview-right-line-value">Apple M1 MAX</div>
                </div>
                <div className="overview-right-line-container">
                  <div className="overview-right-line-name">Memory</div>
                  <div className="overview-right-line-value">64 GB DDR5</div>
                </div>
                <div className="overview-right-line-container">
                  <div className="overview-right-line-name">Graphics</div>
                  <div className="overview-right-line-value">Apple M1 MAX</div>
                </div>
                <div className="overview-right-line-container">
                  <div className="overview-right-line-name">Serial Number</div>
                  <div className="overview-right-line-value">20001006</div>
                </div>
              </div>
            </div>
          </div>
          <div className="overview-footer">
            ™ and © 1983-2021 Apple Inc. All rights reserved. License and
            Warranty
          </div>
        </div>
      );
    case 'Displays':
      return null;
    case 'Storage':
      return null;
    case 'Support':
      return null;
    case 'Resources':
      return null;
  }
};
