const Employee = require("./Employee")

class Manager extends Employee {
    constructor(name,id,email,officeNumber){
        super(name,id,email);
        this.officeNumber = officeNumber;
        this.role = "Manager"
    }
    getRole(){
        console.log(`${this.role}`);

        return this.role
    }
    getOffice(){
        console.log(`${this.officeNumber}`);

        return this.officeNumber
    }
}

// const gary = new Manager ("gary",3,"elel",4);

// gary.getOffice();

// gary.getRole();

// gary.getEmail();

module.exports = Manager;






