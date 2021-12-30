import { faItunesNote } from '@fortawesome/free-brands-svg-icons';
import {
  faBackward,
  faForward,
  faPause,
  faPlay,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { MorandiColorList } from '../../../utils/utils.d';
import { AppBarButton } from '../../../utils/utlils';
import { MusicLineProps, MusicProps } from './music.d';
import styles from './music.module.scss';

export const Music = (props: MusicProps) => {
  return (
    <div
      className={styles.music}
      data-show={props.show}
      style={{
        background:
          MorandiColorList[
            props.musicList?.song.genre % MorandiColorList.length
          ] + `CC`,
      }}
    >
      <div className={styles.appBar}>
        <div className={styles.appBarBtnContainer}>
          <AppBarButton setClose={() => props.setApp('Music')} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.musicBar}>
          <div
            className={styles.albumIconBox}
            style={{
              background:
                MorandiColorList[
                  props.musicList?.song.genre % MorandiColorList.length
                ],
            }}
          >
            <FontAwesomeIcon className={styles.albumIcon} icon={faItunesNote} />
          </div>
          <div className={styles.musicInfoContainer}>
            <div className={styles.title}>{props.musicList?.song.title}</div>
            <div className={styles.subtitle}>
              {props.musicList?.song.singer[0].title +
                ` - ` +
                props.musicList?.song.album.title}
            </div>
          </div>
          <div className={styles.musicController}>
            <div className={styles.controllerIconBox} onClick={props.playPrev}>
              <FontAwesomeIcon
                className={styles.controllerIcon}
                icon={faBackward}
              />
            </div>
            <div className={styles.controllerIconBox} onClick={props.playMusic}>
              {props.musicList?.state === 'playing' ? (
                <FontAwesomeIcon
                  className={styles.controllerIcon}
                  icon={faPause}
                />
              ) : (
                <FontAwesomeIcon
                  className={styles.controllerIcon}
                  icon={faPlay}
                />
              )}
            </div>
            <div className={styles.controllerIconBox} onClick={props.playNext}>
              <FontAwesomeIcon
                className={styles.controllerIcon}
                icon={faForward}
              />
            </div>
          </div>
        </div>
        <div className={styles.musicContent}>
          <div className={styles.musicListContainer}>
            {props.musicList
              ? Object.keys(props.musicList.songs).map((key, index) => {
                  return (
                    <MusicListLine
                      title={props.musicList.songs[key].title}
                      singers={props.musicList.songs[key].singer[0].title}
                      album={props.musicList.songs[key].album.title}
                      playing={false}
                      onClick={() => props.playOnIndex(index)}
                      key={index}
                    />
                  );
                })
              : null}
          </div>
        </div>
      </div>
    </div>
  );
};
const MusicListLine = (props: MusicLineProps) => {
  return (
    <div className={styles.musicLine} onClick={props.onClick}>
      {props.title + ' - ' + props.singers + ' - ' + props.album}
    </div>
  );
};
