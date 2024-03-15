import type React from 'react';
import { atom } from 'recoil';

export type BottomSheetOptions = {
  closeOnDimmedClick?: boolean;
};

export const bottomSheetState = atom<{
  element: React.ReactNode;
  options?: BottomSheetOptions;
} | null>({
  key: 'bottomSheetState',
  default: null,
});
