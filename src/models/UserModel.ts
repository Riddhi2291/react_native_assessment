import {BaseModel} from '../reduxStore';

interface DataSectionConfig {
  users: any[];
}

export default class UserModel extends BaseModel<DataSectionConfig> {
  static resource = 'UserModel';
}
