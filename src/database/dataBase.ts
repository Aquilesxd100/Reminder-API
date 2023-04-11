import User from "../models/User";
import UserList from "../models/UserList";

export const usersList : UserList = new UserList();
const testUser = new User("fernando", "123a");
usersList.addUser(testUser);