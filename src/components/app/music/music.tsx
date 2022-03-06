import { faItunesNote } from '@fortawesome/free-brands-svg-icons';
import {
  faBackward,
  faForward,
  faPause,
  faPlay,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { AppStateAction, MorandiColorList } from '../../../utils/utils.d';
import { AppBarButton } from '../../../utils/utlils';
import styles from './music.module.scss';
export const Music = ({
  state,
  setApp,
  musicList,
  playMusic,
  playOnIndex,
  playPrev,
  playNext,
}: {
  state: number;
  setApp: React.Dispatch<AppStateAction>;
  musicList: any;
  playMusic: () => void;
  playOnIndex: (index: number) => void;
  playPrev: () => void;
  playNext: () => void;
}) => {
  const setClosed = () => setApp('MUSIC_CLOSED');
  const setMinimized = () => setApp('MUSIC_MINIMIZED');
  const setMaximized = () => {
    if (state === 3) {
      setApp('MUSIC_OPENED');
    } else setApp('MUSIC_MAXIMIZED');
  };
  return (
    <div
      className={styles.music}
      data-show={state}
      style={{
        background: `${
          MorandiColorList[musicList?.song.genre % MorandiColorList.length]
        }CC`,
      }}
      draggable="true"
    >
      <div className={styles.appBar}>
        <div className={styles.appBarBtnContainer}>
          <AppBarButton
            setClosed={setClosed}
            setMinimized={setMinimized}
            setMaximized={setMaximized}
          />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.musicBar}>
          <div
            className={styles.albumIconBox}
            style={{
              background:
                MorandiColorList[
                  musicList?.song.genre % MorandiColorList.length
                ],
            }}
          >
            <FontAwesomeIcon className={styles.albumIcon} icon={faItunesNote} />
          </div>
          <div className={styles.musicInfoContainer}>
            <div className={styles.title}>{musicList?.song.title}</div>
            <div className={styles.subtitle}>
              {musicList?.song.singer[0].title} - {musicList?.song.album.title}
            </div>
          </div>
          <div className={styles.musicController}>
            <div className={styles.controllerIconBox} onClick={playPrev}>
              <FontAwesomeIcon
                className={styles.controllerIcon}
                icon={faBackward}
              />
            </div>
            <div className={styles.controllerIconBox} onClick={playMusic}>
              {musicList?.state === 'playing' ? (
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
            <div className={styles.controllerIconBox} onClick={playNext}>
              <FontAwesomeIcon
                className={styles.controllerIcon}
                icon={faForward}
              />
            </div>
          </div>
        </div>
        <div className={styles.musicContent}>
          <div className={styles.musicListContainer}>
            {musicList
              ? Object.keys(musicList.songs).map((key, index) => {
                  return (
                    <MusicListLine
                      title={musicList.songs[key].title}
                      singers={musicList.songs[key].singer[0].title}
                      album={musicList.songs[key].album.title}
                      playing={false}
                      onClick={() => playOnIndex(index)}
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
const MusicListLine = ({
  title,
  singers,
  album,
  playing,
  onClick,
}: {
  title: string;
  singers: string[];
  album: string;
  playing: boolean;
  onClick: () => void;
}) => {
  return (
    <div className={styles.musicLine} onClick={onClick}>
      {title} - {singers} - {album}
    </div>
  );
};
