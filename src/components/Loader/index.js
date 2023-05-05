import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import colors from '../../assets/colors';

const Loader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator animating={true} color={colors.sky} size="large" />
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    flex: 1,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.transparent,
    zIndex: 15,
  },
});
