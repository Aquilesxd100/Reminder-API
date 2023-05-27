import User from "./OldUser";

export default class UserList {
    private userList : Array<User> = []
    constructor(){

    };
    addUser(newUser : User) {
        this.userList.push(newUser);
    };
    deleteUser(userIndex: number) {
        this.userList.splice(userIndex, 1);
    };
    getUserByUserName(userName : string) : User | undefined {
        return this.userList.find(user => user.getUserName() === userName);
    };
    getUserById(userId : string) : User | undefined {
        return this.userList.find(user => user.getUserId() === userId);
    };
    getUserList() : Array<User>  {
        return this.userList;
    };
};