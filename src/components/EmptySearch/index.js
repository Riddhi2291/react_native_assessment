import React from 'react';
import {StyleSheet, View} from 'react-native';
import {FontText} from '@components';
import {hp, normalize, wp} from '../../styles/responsiveScreen';

const EmptySearch = () => {
  return (
    <View style={styles.container}>
      <FontText
        size={normalize(20)}
        color="gray-13"
        textAlign="center"
        pTop={hp(3)}>
        {`Sorry we couldn’t find any matches`}
      </FontText>
    </View>
  );
};

export default EmptySearch;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: hp(8),
    paddingHorizontal: wp(5),
  },
});
