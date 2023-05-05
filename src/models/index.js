import UserModel from './UserModel.ts';
import FolloeUserModel from './FollowUserModel.ts';

export const initiateEmptyStore = () => {
  new UserModel({
    id: 'users',
    users: [],
  }).$save();

  new FolloeUserModel({
    id: 'followUsers',
    followUsers: [],
    isPageEnd: false,
  }).$save();
};
