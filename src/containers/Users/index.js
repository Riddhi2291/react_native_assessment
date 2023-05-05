import React, {useEffect, useState} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import userService from '../../services/userService';
import {FontText, ListSearch, NavigationBar, Loader} from '@components';
import {normalize} from '../../styles/responsiveScreen';
import UserList from '../../components/UserList';
import colors from '../../assets/colors';
import UserModel from '../../models/UserModel';
import {connect} from 'react-redux';
import {routeName as userDetailsRouteName} from '../UserDetails';
import ListItemPlaceholder from '../../components/UserList/ListItemPlaceholder';
import {PALCEHOLDER_DATA} from '../../constants/urls';

export const routeName = 'Users';
const Users = ({navigation, users}) => {
  const [searchText, setSearchText] = useState('');
  const [refreshing, setRefreshing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
      getUsers(0);
  }, []);

  const getUsers = async page => {
    setIsLoading(true);
    const response = await userService.getUsers(page);
    setRefreshing(false);
    if (response?.error) {
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  };

  const searchUser = async () => {
    setIsLoading(true);
    const response = await userService.getSearchedUser({
      searchText: searchText,
    });
    if (response?.error) {
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  };

  const onSearchHandler = () => {
    searchUser();
  };

  const onSearchChangeHandler = value => {
    setSearchText(value);
  };

  const onClearSearchHandler = () => {
    setSearchText('');
    getUsers(0);
  };

  const onEndReachHandler = () => {
    if (searchText == '' && !refreshing) {
      getUsers(users ? users[users?.length - 1]?.id : 0);
    }
  };

  const onRefreshHandler = () => {
    setRefreshing(true);
    getUsers(0);
  };

  const onItemPressHandler = data => {
    navigation.navigate(userDetailsRouteName, {data});
  };

  const renderPlaceHolder = ({item}) => {
    return <ListItemPlaceholder item={item} />;
  };

  return (
    <View style={styles.container}>
      <NavigationBar
        hasCenter
        borderBottomWidth={0}
        center={
          <FontText
            lines={1}
            color="black"
            size={normalize(18)}
            textAlign={'center'}
            style={{fontWeight: 'bold'}}>
            {'Github Users'}
          </FontText>
        }
      />
      <ListSearch
        placeHolder="Type User Name"
        searchText={searchText}
        onSearchChange={onSearchChangeHandler}
        onEndEditing={onSearchHandler}
        onClearSearch={onClearSearchHandler}
      />
      {users.length === 0 && isLoading ? (
        <FlatList
          data={PALCEHOLDER_DATA.slice(0, 10)}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={renderPlaceHolder}
        />
      ) : null}
      <UserList
        userData={users}
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
    users: UserModel.getInstance('users', state).props.users,
  };
};

export default connect(mapStateToProps)(Users);
