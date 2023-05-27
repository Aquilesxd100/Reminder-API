
export default class User {
    private userName: string
    private password: string
    private id: string
    constructor(userDB : any){
        this.userName = userDB.username;
        this.password = userDB.password;
        this.id = userDB.id;
    };
    getUserId() {
        return this.id;
    };
    getUserName() {
        return this.userName;
    };
    getPassword() {
        return this.password;
    };
};