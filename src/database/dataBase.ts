import Reminder from "../models/Reminder";
import User from "../models/User";
import UserList from "../models/UserList";

export const usersList : UserList = new UserList();
const testUser = new User("fernando", "123a");
const reminder1 = new Reminder("lavar a louca", "15/06/1998", "20:20", "lavar toda a louca");
testUser.newReminder(reminder1);
usersList.addUser(testUser);