import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {FontText, NavigationBar, Button} from '@components';
import {normalize, wp} from '../../styles/responsiveScreen';
import colors from '../../assets/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {routeName as followRouteName} from '../Follow';
import UserDetail from '../../components/UserDetail';

export const routeName = 'UserDetails';
const UserDetails = ({navigation, route}) => {
  const params = route?.params;
  const userName =
    params?.data?.login.charAt(0).toUpperCase() + params?.data?.login.slice(1);

  useEffect(() => {}, []);

  const onGoBack = () => {
    navigation.goBack();
  };

  const onFollowerHandler = () => {
    navigation.navigate(followRouteName, {
      id: params?.data?.login,
      from: 'followers',
    });
  };

  const onFollowingHandler = () => {
    navigation.navigate(followRouteName, {
      id: params?.data?.login,
      from: 'following',
    });
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
            {userName}
          </FontText>
        }
      />
      <UserDetail
        user={params?.data}
        onFollowerClick={onFollowerHandler}
        onFollowingClick={onFollowingHandler}
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

export default UserDetails;
