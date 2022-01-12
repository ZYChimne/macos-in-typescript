import React from 'react';
export type LockScreenProps = {
  lock: boolean;
  setLock: React.Dispatch<React.SetStateAction<boolean>>;
};
