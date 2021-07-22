const Employee = require("./Employee")

class Intern extends Employee {
    constructor(name,id,email,school){
        super(name,id,email)
        this.school = school
        this.role = "Intern"
    }
    getSchool(){
        console.log(`${this.school}`);

        return this.school
    }
    getRole(){
        console.log(`${this.role}`);

        return this.role
    }
}

// const gary = new Intern ("gardy",34,"eldsel",43);

// gary.getSchool();

// gary.getRole();

// gary.getEmail();

module.exports = Intern;