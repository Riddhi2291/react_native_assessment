import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import colors from '../../assets/colors';
import {hp, wp} from '../../styles/responsiveScreen';

const ListItemPlaceholder = ({item}) => {
  return (
    <SkeletonPlaceholder
      height={hp}
      backgroundColor={colors.placeHolderBackground}
      key={item.toString()}>
      <SkeletonPlaceholder.Item
        marginVertical={hp(1.5)}
        marginRight={wp(2)}
        marginLeft={wp(3)}
        flexDirection="row"
        alignItems="center">
        <SkeletonPlaceholder.Item
          width={wp(20)}
          height={wp(20)}
          borderRadius={wp(10)}
          marginTop={wp(1.2)}
        />
        <SkeletonPlaceholder.Item marginLeft={wp(2)}>
          <SkeletonPlaceholder.Item width={wp(25)} height={hp(2)} />
          <SkeletonPlaceholder.Item
            marginTop={wp(1.2)}
            width={wp(70)}
            height={hp(1.3)}
          />
          <SkeletonPlaceholder.Item
            marginTop={wp(1.2)}
            width={wp(70)}
            height={hp(1.3)}
          />
          <SkeletonPlaceholder.Item
            marginTop={wp(1.2)}
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between">
            <SkeletonPlaceholder.Item width={wp(25)} height={hp(2.4)} />
            <SkeletonPlaceholder.Item
              width={wp(25)}
              height={hp(2.4)}
              marginLeft={wp(2)}
            />
          </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  );
};

export default ListItemPlaceholder;
