import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {GLOBAL_NAVIGATION_BAR} from 'src/constant';
import {useNavigation} from 'src/hooks';
import {wp} from 'src/utils';
import {styles} from './styles';

const SCREEN_WIDTH = Math.round(Dimensions.get('window').width);

export const GlobalNavigationBar: React.FC = () => {
  const GLOBAL_NAVIGATION_BAR_WIDTH = SCREEN_WIDTH - wp(50);
  const [page, setPage] = useState(0);
  const {navigate} = useNavigation();

  (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const newPage = Math.round(
      event.nativeEvent.contentOffset.x / GLOBAL_NAVIGATION_BAR_WIDTH,
    );
    setPage(newPage);
  };

  return (
    <SafeAreaView>
      <View style={styles.globalNavigationBarWrapper}>
        {GLOBAL_NAVIGATION_BAR.map((content, i) => {
          const isFocused = i === page;
          return (
            <TouchableOpacity key={i + 1} onPress={() => navigate(content.id)}>
              <View style={styles.globalNavigationBarContentsWrapper}>
                <Image
                  source={content.icon}
                  style={styles.globalNavigationBarIcon}
                />
                <Text
                  style={[
                    styles.globalNavigationBarDescription,
                    isFocused && styles.globalNavigationBarDescriptionFocused,
                  ]}>
                  {content.text}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
};
