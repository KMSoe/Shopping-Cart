export default class Gate{

    constructor(user){
        this.user = user;
    }

    isAdmin(){
        return true;
    }

    isUser(){
        return false;
    }
    
    // isAdminOrUser(){
    //     if(this.user.type === 'user' || this.user.type === 'admin'){
    //         return true;
    //     }
    // }
}

