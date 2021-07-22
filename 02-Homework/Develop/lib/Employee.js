// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName(){
        console.log(`${this.name}`)
    }
    getEmail(){
        console.log(`${this.email}`)
    }
    getID(){
        console.log(`${this.id}`)
    }
    getRole(){
        return Employee
    }
}

const bill = new Employee("Bill", 1, "bill.bill@bill.com");

bill.getName();
bill.getEmail();
bill.getID();

