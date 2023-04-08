import User from "./User";

export default class UserList {
    private userList : Array<User> = []
    constructor(){

    };
    addUser(newUser : User) {
        this.userList.push(newUser);
    };
    deleteUser(userIndex : number) {
        this.userList.splice(userIndex, 1);
    };
    getUserById(userId : string) {
        return this.userList.find(user => user.getUserName() === userId);
        /* return this.userList.find(user => user.getUserId() === userId); */
    };
    getUserList() {
        return this.userList;
    };
};