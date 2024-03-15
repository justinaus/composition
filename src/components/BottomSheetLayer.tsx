import { useCallback } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

import { BottomSheet } from '@/design-system-sample/bottomSheet/BottomSheet';
import { bottomSheetState } from '@/stores/bottomSheetState';
import { safeAreaState } from '@/stores/layoutState';

export default function BottomSheetLayer() {
  const [bottomSheet, setBottomSheet] = useRecoilState(bottomSheetState);

  const safeArea = useRecoilValue(safeAreaState);

  // useLockBodyScroll(Boolean(bottomSheet));

  const handleClickDimmed = useCallback(() => {
    if (!bottomSheet?.options?.closeOnDimmedClick) {
      return;
    }

    setBottomSheet(null);
  }, [bottomSheet?.options?.closeOnDimmedClick, setBottomSheet]);

  if (!bottomSheet) return null;

  return (
    <BottomSheet>
      <BottomSheet.Dimmed onClick={handleClickDimmed} />
      <BottomSheet.Paper
        css={{
          paddingBottom: safeArea.safeAreaBottomHeight,
        }}
      >
        {bottomSheet.element}
      </BottomSheet.Paper>
    </BottomSheet>
  );
}
