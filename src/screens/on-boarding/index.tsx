import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  FlatList,
  GestureResponderEvent,
  Image,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {Button} from 'src/components';
import {OAUTH_TYPE, OAUTH_ITEMS, ON_BOARDING_ITEMS, SCREEN} from 'src/constant';
import {useBottomSheet, useLogin, useNavigation} from 'src/hooks';
import {globalStyles} from 'src/styles';
import {wp} from 'src/utils';

import {styles} from './styles';

const SCREEN_WIDTH = Math.round(Dimensions.get('window').width);

export const OnBoardingScreen: React.FC = () => {
  const ON_BOARDING_ITEM_WIDTH = SCREEN_WIDTH - wp(50);
  const [page, setPage] = useState(0);
  const {BottomSheet, openBottomSheet, closeBottomSheet} = useBottomSheet({
    title: '로그인 방법을\n선택해주세요 😎',
  });
  const {navigate} = useNavigation();
  const {login, profile} = useLogin();

  const flatListRenderItem = (item: typeof ON_BOARDING_ITEMS[number]) => {
    return (
      <View
        style={[
          styles.onBoardingFlatListItemContainer,
          {width: ON_BOARDING_ITEM_WIDTH},
        ]}>
        <Image
          source={item.image}
          style={[styles.onBoardingFlatListItemImage]}
        />
        <Text style={styles.onBoardingFlatListItemTitle}>{item.title}</Text>
        <Text style={styles.onBoardingFlatListItemDescription}>
          {item.description}
        </Text>
      </View>
    );
  };

  const handleOnScrollFlatList = (
    event: NativeSyntheticEvent<NativeScrollEvent>,
  ) => {
    const newPage = Math.round(
      event.nativeEvent.contentOffset.x / ON_BOARDING_ITEM_WIDTH,
    );
    setPage(newPage);
  };

  const handleOnPressLoginButton = (event: GestureResponderEvent) => {
    event.preventDefault();
    openBottomSheet();
  };

  const handleOnPressSocialLoginButton = async (oauthType: OAUTH_TYPE) => {
    login(oauthType);
    closeBottomSheet();
  };

  useEffect(() => {
    if (profile) {
      navigate(SCREEN.MAP);
    }
  }, [profile]);

  return (
    <SafeAreaView style={globalStyles.safeAreaView}>
      <View style={globalStyles.screenContainer}>
        <View style={styles.onBoardingItemsContainer}>
          <FlatList
            automaticallyAdjustContentInsets={false}
            data={ON_BOARDING_ITEMS}
            decelerationRate="fast"
            horizontal
            keyExtractor={item => `item__${item.image}`}
            onScroll={handleOnScrollFlatList}
            pagingEnabled
            renderItem={({item}) => flatListRenderItem(item)}
            snapToInterval={ON_BOARDING_ITEM_WIDTH}
            snapToAlignment="start"
            showsHorizontalScrollIndicator={false}
          />

          <View style={styles.indicatorWrapper}>
            {Array.from({length: ON_BOARDING_ITEMS.length}, (_, i) => i).map(
              i => {
                const isFocused = i === page;
                return (
                  <View
                    key={`indicator_${i}`}
                    style={[
                      styles.indicator,
                      isFocused && styles.indicatorFocused,
                    ]}
                  />
                );
              },
            )}
          </View>
        </View>

        <View style={styles.onBoardingBottomContainer}>
          <Button label="로그인" onPress={handleOnPressLoginButton} />
          <View style={styles.findAccountTextContainer}>
            <Text style={styles.findAccountText}>계정이 기억나지 않나요? </Text>
            <TouchableOpacity activeOpacity={0.6}>
              <Text style={styles.findAccountButton}>계정 찾기</Text>
            </TouchableOpacity>
          </View>
        </View>

        <BottomSheet>
          <View>
            {OAUTH_ITEMS.map((oauth, i) => {
              const isNotFirstElement = i !== 0;

              return (
                <TouchableOpacity
                  key={oauth.id}
                  style={[
                    styles.loginOAuthItemContainer,
                    isNotFirstElement && styles.loginOAuthItemColumnGap,
                  ]}
                  activeOpacity={0.6}
                  onPress={() => handleOnPressSocialLoginButton(oauth.id)}>
                  <Image source={oauth.icon} style={styles.loginOAuthIcon} />
                  <Text style={styles.loginOAuthText}>{oauth.text}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </BottomSheet>
      </View>
    </SafeAreaView>
  );
};
