import { User } from '../../interfaces/account.interface';
import { UserModel } from './user.model';

const createUser = async (userDetails: User) => {
  try {
    return await UserModel.create(userDetails);
  } catch (error) {
    console.log(error);
  }
};

const findUserByEmail = async (email: string) => {
  try {
    return await UserModel.findOne({ email: email });
  } catch (error) {
    console.log(error);
  }
};

const updateUserPassword = async (email: string, newPassword: string) => {
  try {
    return await UserModel.findOneAndUpdate({ email: email }, { password: newPassword });
  } catch (error) {
    console.log(error);
  }
};

export { createUser, findUserByEmail, updateUserPassword };
