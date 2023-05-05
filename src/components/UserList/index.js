import React from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import {FontText, EmptySearch, Avatar, Loader} from '@components';
import colors from '../../assets/colors';
import {wp, hp, normalize} from '../../styles/responsiveScreen';
import globalStyles from '../../styles';

const UserList = ({
  userData,
  refreshing,
  isLoading,
  onItemPress,
  style,
  containerStyle,
  onEndReach,
  onMomentumScrollEnd,
  onRefresh,
}) => {
  const _keyExtractor = (item, index) => index.toString();

  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        style={styles.itemContainer}
        onPress={() => onItemPress(item)}>
        <View style={styles.listItem}>
          <Avatar isPlaceHolder size={wp(24)} src={{uri: item?.avatar_url}} />
          <View style={styles.titleContainer}>
            <FontText
              color={'black'}
              size={normalize(21)}
              style={styles.boldFont}>
              {item?.login.charAt(0).toUpperCase() + item?.login.slice(1)}
            </FontText>

            <FontText color={'black'} size={normalize(17)} pTop={hp(0.5)}>
              {item?.name}
            </FontText>
            <FontText color={'black'} size={normalize(15)}>
              {item?.bio}
            </FontText>
            <FontText
              color={'black'}
              size={normalize(17)}
              pTop={hp(0.5)}
              style={styles.boldFont}>
              {`Followers: ${item?.followers || 0}`}
              {'   '}
              {`Following: ${item?.following || 0}`}
            </FontText>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const renderEmpty = () => {
    return <EmptySearch />;
  };

  return (
    <FlatList
      // bounces={false}
      keyExtractor={_keyExtractor}
      data={userData}
      renderItem={renderItem}
      style={[styles.wrapperStyle, style]}
      showsVerticalScrollIndicator={false}
      removeClippedSubviews={false}
      contentContainerStyle={[styles.containerStyle, containerStyle]}
      keyboardShouldPersistTaps="always"
      ListEmptyComponent={userData?.length > 0 ? null : renderEmpty()}
      onEndReachedThreshold={0.1}
      onEndReached={onEndReach}
      onMomentumScrollEnd={onMomentumScrollEnd}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      ListFooterComponent={isLoading && <Loader />}
    />
  );
};

const styles = StyleSheet.create({
  wrapperStyle: {},
  containerStyle: {
    padding: wp(3),
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemContainer: {
    backgroundColor: colors.white,
    paddingVertical: hp(1.5),
    paddingHorizontal: wp(2),
    marginBottom: hp(1.5),
    borderRadius: 8,
    ...globalStyles.shadow,
  },
  titleContainer: {
    flex: 0.95,
  },
  boldFont: {
    fontWeight: 'bold',
  },
});

export default UserList;
