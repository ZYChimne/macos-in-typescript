import { faApple } from '@fortawesome/free-brands-svg-icons';
import { faGlassWhiskey, faTv } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { AppBarButton } from '../../../utils/utlils';
import {
  AboutContent,
  PreferencesContentProps,
  PreferencesContentType,
  PreferencesProps,
  SupportImportant,
  SupportText,
} from './preferences.d';
import './preferences.scss';

export const Preferences = (props: PreferencesProps) => {
  const [contentType, setContentType] =
    useState<PreferencesContentType>('Overview');
  return (
    <div className="Preferences" data-show={props.show}>
      <div className="appbar-container">
        <div className="appbar-container-left">
          <AppBarButton setClose={() => props.setApp('Preferences')} />
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
const StorageStatusBar = (props: any) => {
  return (
    <div className="storage-status-bar">
      <div
        className="storage-status-item"
        style={{ width: `20%`, background: `rgb(235, 69, 90)` }}
      >
        Apps
      </div>
      <div
        className="storage-status-item"
        style={{ width: `10%`, background: `rgb(99, 201, 86)` }}
      />
      <div
        className="storage-status-item"
        style={{ width: `5%`, background: `rgb(234, 60, 247)` }}
      />
      <div
        className="storage-status-item"
        style={{ width: `5%`, background: `rgb(154, 84, 185)` }}
      />
      <div
        className="storage-status-item"
        style={{ width: `5%`, background: `rgb(121, 121, 121)` }}
      />
      <div
        className="storage-status-item"
        style={{ width: `5%`, background: `rgb(157, 133, 99)` }}
      />
      <div
        className="storage-status-item"
        style={{ width: `10%`, background: `rgb(192, 192, 192)` }}
      />
      <div
        className="storage-status-item"
        style={{ width: `20%`, background: `rgb(146, 146, 146)` }}
      />
      <div
        className="storage-status-item"
        style={{ width: `20%`, background: `white` }}
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
          <div className="storage-text">12.8 TB available out of 16 TB</div>
          <StorageStatusBar />
        </div>
      </div>
    </div>
  );
};
const Support = () => {
  return (
    <div className="Support-container">
      <div className="support-left">
        <div className="support-img-box">
          <FontAwesomeIcon className="support-img" icon={faApple} />
        </div>
        <div className="support-title">Limited Warranty</div>
        <div className="support-subtitle">Expires Dec 30, 2030</div>
      </div>
      <div className="support-right">
        <div className="support-right-line1">
          <div className="support-text">{SupportText}</div>
        </div>
        <div className="support-right-line2">
          <div className="support-text">{SupportImportant}</div>
        </div>
      </div>
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
const PreferenceContent = (props: PreferencesContentProps) => {
  switch (props.contentType) {
    case 'Overview':
      return <Overview />;
    case 'Displays':
      return <Displays />;
    case 'Storage':
      return <Storage />;
    case 'Support':
      return <Support />;
    case 'About':
      return <About />;
  }
};
