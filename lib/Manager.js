const Employee = require("./Employee")




// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
class Manager extends Employee {
    
    constructor(name, id, email, officeNumber){
        super(name, id, email)
    this.officeNumber = officeNumber;
    
    }
    getRole(){
    return "Manager"
    }
    getOfficeNumber(){
        return this.officeNumber
    }
}


module.exports = Manager;

// const manager = new Manager ("cass", 34985, 'cass@fake.com', 2056784329, "Manager" );
// manager.getName()
// manager.getId()
// manager.getEmail()
// manager.getRole()
// manager.getOfficeNumber()