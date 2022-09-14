import React from 'react';

import {TextInput, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Button} from 'src/components';

export const OpenChallengeStep2Screen: React.FC = () => {
  return (
    <SafeAreaView>
      <View>
        <TextInput multiline={true} numberOfLines={10} />
        <Button label="다음으로" />
      </View>
    </SafeAreaView>
  );
};
