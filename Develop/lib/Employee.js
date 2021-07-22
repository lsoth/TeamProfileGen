class Employee {
    constructor(name,id, email){
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = "Employee"
    }

    getName(){
        console.log(`${this.name}`);

        return this.name
    }

    getEmail(){
        console.log(`${this.email}`);

        return this.email
    }

    getId(){
        console.log(`${this.id}`);

        return this.id
    }

    getRole(){
        console.log(`${this.role}`);
        
        return this.role
    }
}

// const bill = new Employee("Bill", 1, "bill.bill@bill.com");

// bill.getName();
// bill.getEmail();
// bill.getID();
// bill.getRole();

module.exports = Employee;