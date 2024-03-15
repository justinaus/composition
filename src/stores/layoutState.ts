import { atom } from 'recoil';

export const safeAreaState = atom<{
  safeAreaTopHeight: number;
  safeAreaBottomHeight: number;
}>({
  key: 'safeAreaState',
  default: {
    // get the value dynamically.
    safeAreaTopHeight: 100,
    safeAreaBottomHeight: 50,
  },
});
