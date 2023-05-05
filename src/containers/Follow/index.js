import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import userService from '../../services/userService';
import {FontText, NavigationBar, Loader, Button} from '@components';
import {normalize, wp} from '../../styles/responsiveScreen';
import UserList from '../../components/UserList';
import colors from '../../assets/colors';
import {connect} from 'react-redux';
import {routeName as followDetailRouteName} from '../FollowDetail';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FollowUserModel from '../../models/FollowUserModel';

export const routeName = 'Follow';
const Follow = ({navigation, route, followUsers, isPageEnd}) => {
  const params = route?.params;
  const [page, setPage] = useState(0);
  const [refreshing, setRefreshing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getFollowUsers();
  }, [page]);

  const getFollowUsers = async () => {
    setIsLoading(true);
    console.log('page......', page);
    const response = await userService.getFollow(
      page,
      params?.id,
      params?.from,
    );
    setRefreshing(false);
    if (response?.error) {
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  };

  const onEndReachHandler = () => {
    if (!isPageEnd) {
      setPage(page + 1);
    }
  };

  const onRefreshHandler = () => {
    if (page != 0) {
      setRefreshing(true);
      setPage(0);
    } else {
      getFollowUsers();
    }
  };

  const onItemPressHandler = data => {
    navigation.navigate(followDetailRouteName, {data});
  };

  const onGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <NavigationBar
        hasLeft
        hasRight
        hasCenter
        borderBottomWidth={0}
        left={
          <Button
            flex={false}
            width={wp(10)}
            minWidth={wp(10)}
            height={wp(10)}
            onPress={onGoBack}>
            <Icon name="arrow-back-ios" size={30} color={colors.black} />
          </Button>
        }
        center={
          <FontText
            lines={1}
            color="black"
            size={normalize(18)}
            textAlign={'center'}
            style={{fontWeight: 'bold'}}>
            {params?.from?.charAt(0).toUpperCase() + params?.from?.slice(1)}
          </FontText>
        }
      />
      <UserList
        userData={followUsers}
        refreshing={refreshing}
        isLoading={isLoading}
        onItemPress={onItemPressHandler}
        onMomentumScrollEnd={onEndReachHandler}
        onRefresh={onRefreshHandler}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});

const mapStateToProps = state => {
  return {
    followUsers: FollowUserModel.getInstance('followUsers', state).props
      .followUsers,
    isPageEnd: FollowUserModel.getInstance('followUsers', state).props
      .isPageEnd,
  };
};

export default connect(mapStateToProps)(Follow);
