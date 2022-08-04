import React, {useCallback, useState} from 'react';
import {BottomSheet, BottomSheetProps} from 'src/components';

export const useBottomSheet = (
  props: Omit<BottomSheetProps, 'visible' | 'setVisible'>,
) => {
  const [visible, setVisible] = useState(false);

  const BottomSheetForHook: React.FC<{children: React.ReactNode}> = useCallback(
    ({children}) => {
      return (
        <BottomSheet {...props} visible={visible} setVisible={setVisible}>
          {children}
        </BottomSheet>
      );
    },
    [props],
  );

  const openBottomSheet = () => setVisible(true);

  const closeBottomSheet = () => setVisible(false);

  return {
    BottomSheet: BottomSheetForHook,
    openBottomSheet,
    closeBottomSheet,
  };
};
