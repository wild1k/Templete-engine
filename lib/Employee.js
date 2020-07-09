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
    return this.name
    // console.log(`This persons name is ${this.name}`)
    
}

getId(){
    return this.id
    // console.log(`This persons id is ${this.id}`)
    
}

getEmail(){
    return this.email
    // console.log(`Their email address is ${this.email}`)
    
}
//returns 'Employee'
getRole(){
   return "Employee"
}


}

module.exports = Employee;

const worker = new Employee ("Alice", 34985, 'test@test.com', "role");
worker.getName()
worker.getId()
worker.getEmail()
worker.getRole()
// worker.getOfficeNumber()
