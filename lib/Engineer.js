// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee")




// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
class Engineer extends Employee {
    
    constructor(name, id, email, github){
        super(name, id, email)
    this.github = github;
    
    }
    getRole(){
    return "Engineer"
    }
    getGithub(){
        return this.github
        // console.log(`This persons GitHub username is ${this.github}`)
    }


}


module.exports = Engineer;

const worker = new Engineer ("cass", 34985, 'cass@fake.com', "wild1k" );
worker.getName()
worker.getId()
worker.getEmail()
worker.getRole()
// worker.getOfficeNumber()
worker.getGithub()