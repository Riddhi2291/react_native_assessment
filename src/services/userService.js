import {URLS} from '../constants/urls';
import {getRequestApi} from '../helper/AxiosHelper';
import UserModel from '../models/UserModel';
import FollowUserModel from '../models/FollowUserModel';

const getUsers = async page => {
  try {
    const response = await getRequestApi(
      `${URLS.USERS}?since=${page}&per_page=30`,
    );
    const {users} = UserModel.getInstance('users').props;
    new UserModel({
      id: 'users',
      users: page == 0 ? response : [...users, ...response],
    }).$save();
    return response;
  } catch (error) {
    new UserModel({
      id: 'users',
      users: [],
    }).$save();
    return error;
  }
};

const getSearchedUser = async data => {
  try {
    const response = await getRequestApi(`${URLS.USERS}/${data?.searchText}`);
    new UserModel({
      id: 'users',
      users: [response],
    }).$save();
    return [response];
  } catch (error) {
    new UserModel({
      id: 'users',
      users: [],
    }).$save();
    return error;
  }
};

const getFollow = async (page, id, from) => {
  try {
    const response = await getRequestApi(
      `${URLS.USERS}/${id}/${from}?page=${page}&per_page=30`,
    );
    const {followUsers} = FollowUserModel.getInstance('followUsers').props;
    new FollowUserModel({
      id: 'followUsers',
      followUsers: page == 0 ? response : [...followUsers, ...response],
      isPageEnd: response.length < 30,
    }).$save();
    return response;
  } catch (error) {
    console.log(
      'error......',
      error,
      `${URLS.USERS}/${id}/${from}?page=${page}&per_page=30`,
    );
    new FollowUserModel({
      id: 'followUsers',
      followUsers: [],
      isPageEnd: true,
    }).$save();
    return error;
  }
};

export default {
  getUsers,
  getSearchedUser,
  getFollow,
};
