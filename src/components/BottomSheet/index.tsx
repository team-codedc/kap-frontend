import React, {useEffect, useRef} from 'react';
import {
  Animated,
  Dimensions,
  Modal,
  PanResponder,
  Text,
  View,
} from 'react-native';
import {styles} from './styles';

const SCREEN_HEIGHT = Dimensions.get('screen').height;

export interface BottomSheetProps {
  title: string;
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;

  children?: React.ReactNode;
}

export const BottomSheet: React.FC<BottomSheetProps> = ({
  title,
  visible = false,
  setVisible,
  children,
}) => {
  const panY = useRef(new Animated.Value(SCREEN_HEIGHT)).current;
  const translateY = panY.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: [0, 0, 1],
  });

  const resetBottomSheetAnimate = Animated.timing(panY, {
    toValue: 0,
    duration: 300,
    useNativeDriver: true,
  });

  const closeBottomSheetAnimate = Animated.timing(panY, {
    toValue: SCREEN_HEIGHT,
    duration: 300,
    useNativeDriver: true,
  });

  const panResponders = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => false,
      onPanResponderMove: (event, gestureState) => {
        panY.setValue(gestureState.dy);
      },
      onPanResponderRelease: (event, gestureState) => {
        if (gestureState.dy > 0 && gestureState.vy > 1.5) {
          handleCloseBottomSheet();
        } else {
          resetBottomSheetAnimate.start();
        }
      },
    }),
  ).current;

  const handleCloseBottomSheet = () => {
    closeBottomSheetAnimate.start(() => setVisible(false));
  };

  useEffect(() => {
    if (visible) {
      resetBottomSheetAnimate.start();
    }
  }, [visible]);

  return (
    <Modal
      visible={visible}
      animationType="fade"
      transparent
      statusBarTranslucent>
      <View style={styles.overlay}>
        <View
          style={styles.background}
          onTouchStart={handleCloseBottomSheet}
          onTouchEnd={handleCloseBottomSheet}
        />
        <Animated.View
          style={[styles.bottomSheetContainer, {transform: [{translateY}]}]}
          {...panResponders.panHandlers}>
          <Text style={styles.bottomSheetTitle}>{title}</Text>
          <View>{children}</View>
        </Animated.View>
      </View>
    </Modal>
  );
};
