import UserModel from "../models/user"; //or { default as User }
import { Crud } from "./base";

class User extends Crud {
  constructor(Model: unknown) {
    super(Model);
  }

  public get_byEmail = (params: any, done: Function): void => {
    let { email } = params;
    UserModel.find({ email }).exec();
  };
}

let user_object = new User(UserModel);

export default user_object;
