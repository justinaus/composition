import type React from 'react';
import { useCallback } from 'react';
import { useSetRecoilState } from 'recoil';

import {
  BottomSheetOptions,
  bottomSheetState,
} from '@/stores/bottomSheetState';

export function useBottomSheet() {
  const setBottomSheet = useSetRecoilState(bottomSheetState);

  return {
    open: useCallback(
      (element: React.ReactNode, options?: BottomSheetOptions) => {
        setBottomSheet({
          element,
          options,
        });
      },
      [setBottomSheet],
    ),
    close: useCallback(() => {
      setBottomSheet(null);
    }, [setBottomSheet]),
  };
}
