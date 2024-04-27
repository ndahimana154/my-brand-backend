import mongoose from "mongoose";
import User, { UserDocument } from "../../../database/models/UsersModel";

async function createUser(
  username: string,
  password: string
): Promise<UserDocument> {
  return await User.create({ username, password });
}

async function findUserByUsername(username: string) {
  return await User.findOne({ username: username });
}

export default {
  createUser,
  findUserByUsername,
};
