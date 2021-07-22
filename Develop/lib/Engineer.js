const Employee = require("./Employee");

class Engineer extends Employee{
    constructor(name,id,email,github){
    super(name,id,email);
    this.github = github
    this.role = "Engineer"
    }

    getGithub(){
        console.log(`${this.github}`);

        return this.github
    }

    getRole(){
        console.log(`${this.role}`);

        return this.role
    }

};

// const gary = new Engineer ("garewy",333,"ele34324l",334);

// gary.getGithub();

// gary.getRole();

// gary.getEmail();

module.exports = Engineer;