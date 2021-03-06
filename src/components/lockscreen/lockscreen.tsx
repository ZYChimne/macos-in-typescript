import React from 'react';
import styles from './lockscreen.module.scss';
export const LockScreen = ({
  lock,
  setLock,
}: {
  lock: boolean;
  setLock: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const onKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.code === 'Enter') {
      setLock(false);
    }
  };
  return (
    <div className={styles.lockscreen} data-show={lock}>
      <img className={styles.avatar} src="./assets/icons/profile.png" alt="" />
      <div className={styles.username}>Evan</div>
      <div className={styles.passwordContainer}>
        <input
          className={styles.password}
          type="password"
          onKeyDown={onKeyDown}
          placeholder="Select Here and Enter"
        />
      </div>
    </div>
  );
};
