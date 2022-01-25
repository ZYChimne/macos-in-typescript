import React, { useState } from 'react';
import { MapInfo, MapInfoType, MapLineProps, MapsProps } from './maps.d';
import styles from './maps.module.scss';
import { Map, MapApiLoaderHOC } from 'react-bmapgl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArchway,
  faBed,
  faBuilding,
  faHome,
  faPaintBrush,
  faPaperPlane,
  faSchool,
  faStore,
  faSubway,
  faTree,
  faUtensils,
} from '@fortawesome/free-solid-svg-icons';
import { AppBarButton } from '../../../utils/utlils';
const MapsContainer = (props: MapsProps) => {
  const [position, setPosition] = useState(
    new BMapGL.Point(MapInfo[0].lng, MapInfo[0].lat)
  );
  const [title, setTitle] = useState(MapInfo[0].name);
  const [zoom, setZoom] = useState(18);
  const getPos = () =>
    navigator.geolocation.getCurrentPosition((pos) => {
      setPosition(new BMapGL.Point(pos.coords.longitude, pos.coords.latitude));
      setTitle('My Location');
      setZoom(18);
    });
  const setLOC = (item: MapInfoType) => {
    setPosition(new BMapGL.Point(item.lng, item.lat));
    setTitle(item.name);
    setZoom(18);
  };
  const setClosed = () => props.setApp('MAPS_CLOSED');
  const setMinimized = () => props.setApp('MAPS_MINIMIZED');
  const setMaximized = () => props.setApp('MAPS_MAXIMIZED');
  return (
    <div className={styles.maps} data-show={props.state}>
      <div className={styles.appBar}>
        <div className={styles.appBarBtnContainer}>
          <AppBarButton
            setClosed={setClosed}
            setMinimized={setMinimized}
            setMaximized={setMaximized}
          />
        </div>
        <div className={styles.mapSubtitle}>Favorites</div>
        <div className={styles.mapInfoContainer}>
          {MapInfo.map((item, index) => {
            return (
              <MapLine
                name={item.name}
                type={item.type}
                lng={item.lng}
                lat={item.lat}
                id={index}
                key={index}
                setLOC={() => setLOC(item)}
              />
            );
          })}
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.mapBar}>
          <div className={styles.mapBarLeft}>
            <div className={styles.mapTitle}>{title}</div>
          </div>
          <div className={styles.mapBarRight}>
            <div className={styles.mapBarIconBox} onClick={getPos}>
              <FontAwesomeIcon
                className={styles.mapBarIcon}
                icon={faPaperPlane}
              />
            </div>
          </div>
        </div>
        <div className={styles.mapContainer}>
          <Map
            center={position}
            style={{ width: `100%`, height: `100%` }}
            zoom={zoom}
            enableScrollWheelZoom
            enableDoubleClickZoom
            enableDragging
          />
        </div>
      </div>
    </div>
  );
};
const MapLine = (props: MapLineProps) => {
  let icon = null;
  switch (props.type) {
    case 'Home':
      icon = (
        <div
          className={styles.mapLineIconBox}
          style={{ background: `rgb(84, 190, 249)` }}
        >
          <FontAwesomeIcon className={styles.mapLineIcon} icon={faHome} />
        </div>
      );
      break;
    case 'School':
      icon = (
        <div
          className={styles.mapLineIconBox}
          style={{ background: `rgb(167, 111, 66)` }}
        >
          <FontAwesomeIcon className={styles.mapLineIcon} icon={faSchool} />
        </div>
      );
      break;
    case 'Work':
      icon = (
        <div
          className={styles.mapLineIconBox}
          style={{ background: `rgb(167, 111, 66)` }}
        >
          <FontAwesomeIcon className={styles.mapLineIcon} icon={faBuilding} />
        </div>
      );
      break;
    case 'Spot':
      icon = (
        <div
          className={styles.mapLineIconBox}
          style={{ background: `rgb(111, 124, 246)` }}
        >
          <FontAwesomeIcon className={styles.mapLineIcon} icon={faArchway} />
        </div>
      );
      break;
    case 'Store':
      icon = (
        <div
          className={styles.mapLineIconBox}
          style={{ background: `rgb(244, 178, 62)` }}
        >
          <FontAwesomeIcon className={styles.mapLineIcon} icon={faStore} />
        </div>
      );
      break;
    case 'Traffic':
      icon = (
        <div
          className={styles.mapLineIconBox}
          style={{ background: `rgb(70, 138, 232)` }}
        >
          <FontAwesomeIcon className={styles.mapLineIcon} icon={faSubway} />
        </div>
      );
      break;
    case 'Museum':
      icon = (
        <div
          className={styles.mapLineIconBox}
          style={{ background: `rgb(238, 121, 172)` }}
        >
          <FontAwesomeIcon className={styles.mapLineIcon} icon={faPaintBrush} />
        </div>
      );
      break;
    case 'Hotel':
      icon = (
        <div
          className={styles.mapLineIconBox}
          style={{ background: `rgb(161, 113, 242)` }}
        >
          <FontAwesomeIcon className={styles.mapLineIcon} icon={faBed} />
        </div>
      );
      break;
    case 'Restaurant':
      icon = (
        <div
          className={styles.mapLineIconBox}
          style={{ background: `rgb(238, 152, 62)` }}
        >
          <FontAwesomeIcon className={styles.mapLineIcon} icon={faUtensils} />
        </div>
      );
      break;
    case 'Park':
      icon = (
        <div
          className={styles.mapLineIconBox}
          style={{ background: `rgb(87, 177, 52)` }}
        >
          <FontAwesomeIcon className={styles.mapLineIcon} icon={faTree} />
        </div>
      );
      break;
  }
  return (
    <div className={styles.mapLine} onClick={props.setLOC}>
      {icon}
      <div className={styles.mapLineTextContainer}>
        <div className={styles.mapLineTitle}>{props.name}</div>
        <div className={styles.mapLineSubtitle}>
          {'Longitude: ' +
            props.lng.toFixed(2) +
            ', Latitude: ' +
            props.lat.toFixed(2)}
        </div>
      </div>
    </div>
  );
};
export const Maps = MapApiLoaderHOC({ ak: 'YymPEbKHAZuLlK8bHRUd9xsK0MXE7Gc1' })(
  MapsContainer
);
