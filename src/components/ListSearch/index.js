import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Input, Button} from '@components';
import colors from '../../assets/colors';
import {hp, wp, normalize} from '../../styles/responsiveScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ListSearch = ({
  placeHolder,
  searchText,
  onSearchChange,
  onClearSearch,
  onEndEditing,
  style,
  fontSize,
}) => {
  return (
    <View style={style || styles.container}>
      <Icon name="search" size={30} color={colors.sky} />
      <Input
        color="black"
        value={searchText}
        blurOnSubmit
        fontSize={fontSize || normalize(16)}
        placeholder={placeHolder}
        placeholderTextColor="placeholder"
        style={styles.inputConatiner}
        inputStyle={[styles.searchInput]}
        onChangeText={onSearchChange}
        returnKeyType={'search'}
        onEndEditing={onEndEditing}
      />

      {searchText ? (
        <Button
          flex={false}
          width={wp(10)}
          minWidth={wp(10)}
          height={wp(10)}
          onPress={onClearSearch}>
          <Icon name="close" size={30} color={colors.darkGray} />
        </Button>
      ) : null}
    </View>
  );
};

export default ListSearch;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: wp(3),
    padding: hp(0.5),
    height: wp(12),
    marginVertical: hp(1),
    borderWidth: 1,
    borderColor: colors.sky,
    borderRadius: 5,
  },
  searchInput: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  inputConatiner: {
    flex: 1,
  },
});
