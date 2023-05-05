import React from 'react';
import {StyleSheet, View} from 'react-native';
import {FontText, Avatar, Button} from '@components';
import colors from '../../assets/colors';
import {wp, hp, normalize} from '../../styles/responsiveScreen';
import globalStyles from '../../styles';

const UserDetail = ({user, disabled, onFollowerClick, onFollowingClick}) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.detailContainer}>
        <Avatar
          isPlaceHolder
          size={wp(30)}
          src={{uri: user?.avatar_url}}
          style={styles.profile}
        />
        <FontText
          color={'black'}
          size={normalize(21)}
          textAlign="center"
          style={styles.boldFont}>
          {user?.login.charAt(0).toUpperCase() + user?.login.slice(1)}
        </FontText>

        <FontText
          color={'black'}
          size={normalize(17)}
          textAlign="center"
          pTop={hp(1.5)}>
          {user?.name}
        </FontText>
        <FontText
          color={'black'}
          size={normalize(15)}
          textAlign="center"
          pTop={hp(0.5)}>
          {user?.bio}
        </FontText>
        <View style={styles.followContainer}>
          <Button
            disabled={
              disabled || user?.followers == 0 || user?.followers == undefined
            }
            flex={false}
            onPress={onFollowerClick}>
            <FontText
              color={'black'}
              size={normalize(17)}
              style={styles.boldFont}>
              {`Followers: ${user?.followers || 0}`}
            </FontText>
          </Button>
          <Button
            disabled={
              disabled || user?.following == 0 || user?.following == undefined
            }
            flex={false}
            onPress={onFollowingClick}>
            <FontText
              color={'black'}
              size={normalize(17)}
              style={styles.boldFont}>
              {`Following: ${user?.following || 0}`}
            </FontText>
          </Button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: wp(5),
    marginTop: hp(8),
  },
  detailContainer: {
    backgroundColor: colors.white,
    paddingTop: hp(8),
    paddingBottom: hp(1.5),
    paddingHorizontal: wp(5),
    marginBottom: hp(1.5),
    borderRadius: 8,
    ...globalStyles.shadow,
  },
  profile: {
    position: 'absolute',
    top: -hp(7),
    borderWidth: 1,
    borderColor: colors.sky,
    alignSelf: 'center',
  },
  boldFont: {
    fontWeight: 'bold',
  },
  followContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: hp(1.5),
  },
});

export default UserDetail;
