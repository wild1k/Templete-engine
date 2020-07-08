const { callExpression } = require("@babel/types");


// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email, role){
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = role;


    
}

getName(){
    console.log(`This persons name is ${this.name}`)
    
}

getId(){
    console.log(`This persons id is ${this.id}`)
    
}

getEmail(){
    console.log(`Their email address is ${this.email}`)
    
}
//returns 'Employee'
getRole(){
   return "Employee"
}
getOfficeNumber() {
    console.log(`This person's work number is ${this.officeNumber}`);
    
}


}

module.exports = Employee;

const worker = new Employee ("Alice", 34985, 'test@test.com', "role");
worker.getName()
worker.getId()
worker.getEmail()
worker.getRole()
// worker.getOfficeNumber()
