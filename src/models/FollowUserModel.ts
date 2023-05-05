import {BaseModel} from '../reduxStore';

interface DataSectionConfig {
  followUsers: any[];
  isPageEnd: boolean;
}

export default class FollowUserModel extends BaseModel<DataSectionConfig> {
  static resource = 'FollowUserModel';
}
