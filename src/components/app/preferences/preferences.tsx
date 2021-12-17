import { faGlassWhiskey, faTv } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { AppBarButton } from '../../../utils/utlils';
import {
  AboutContent,
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
            data-active={contentType === 'About'}
            onClick={() => setContentType('About')}
          >
            About
          </div>
        </div>
      </div>
      <PreferenceContent contentType={contentType} />
    </div>
  );
};
const Overview = () => {
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
        ™ and © 1983-2021 Apple Inc. All rights reserved. License and Warranty
      </div>
    </div>
  );
};
const Displays = () => {
  return (
    <div className="Displays-container">
      <FontAwesomeIcon className="displays-img" icon={faTv} />
      <div className="displays-title">Built-in Renita Display</div>
      <div className="displays-subtitle">16 inch (3072 * 1920)</div>
    </div>
  );
};
const About = () => {
  return (
    <div className="About-container">
      <div className="about-content">{AboutContent}</div>
    </div>
  );
};
const StorageStatusBar = (props: any) => {
  return (
    <div className="storage-status-bar">
      <div
        className="storage-status-item"
        style={{ width: `20%`, background: `red` }}
      />
      <div className="storage-status-item" />
      <div className="storage-status-item" />
      <div className="storage-status-item" />
      <div className="storage-status-item" />
      <div className="storage-status-item" />
      <div className="storage-status-item" />
      <div className="storage-status-item" />
      <div
        className="storage-status-item"
        style={{ width: `80%`, background: `white` }}
      />
    </div>
  );
};
const Storage = () => {
  return (
    <div className="Storage-container">
      <div className="storage-constraint">
        <div className="storage-left">
          <FontAwesomeIcon className="storage-img" icon={faGlassWhiskey} />
          <div className="storage-text">16 TB</div>
          <div className="storage-text">Flash Storage</div>
        </div>
        <div className="storage-right">
          <div className="storage-title">Macintosh HD</div>
          <div className="storage-text">8 TB available out of 16 TB</div>
          <StorageStatusBar />
        </div>
      </div>
    </div>
  );
};
const PreferenceContent = (props: PreferencesContentProps) => {
  switch (props.contentType) {
    case 'Overview':
      return <Overview />;
    case 'Displays':
      return <Displays />;
    case 'Storage':
      return <Storage />;
    case 'Support':
      return null;
    case 'About':
      return <About />;
  }
};
