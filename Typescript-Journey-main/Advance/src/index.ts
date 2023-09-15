

// console.log("Hello")


// class User {
//     public email: string
//     private name: string
//     readonly city: string = "Jaipur"
//     constructor(email: string, name: string){
//         this.email = email;
//         this.name = name

//     }
// }

class User {

    protected _courseCount = 1
    
    readonly city: string = "Salur"

    constructor(public email: string, public name: string){
    }
    
    private deleteToken(){
        console.log("Token deleted");
        
    }

    //using get method

    get getAppleEmail(): string{
        return `apple${this.email}`
    }

    get courseCount(): number {
        return this._courseCount
    }

    //using set method 

    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1")
        }
        this._courseCount = courseNum
    }
}


class SubUser extends User {
    isFamily: boolean = true
    changeCourseCount(){
        this._courseCount = 4
    }
}

const temp = new SubUser("leela@.com","leela")
const leela = new User("h@h.com","leela")