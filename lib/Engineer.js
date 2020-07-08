// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee")




// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
class Engineer extends Employee {
    
    constructor(name, id, email, GitHubUser){
        super(name, id, email)
    this.GitHubUser = GitHubUser;
    
    }
    getRole(){
    return "Engineer"
    }
    getGitHub(){
        console.log(`This persons GitHub username is ${this.GitHubUser}`)
    }


}


module.exports = Engineer;

const worker = new Engineer ("cass", 34985, 'cass@fake.com', "wild1k" );
worker.getName()
worker.getId()
worker.getEmail()
worker.getRole()
// worker.getOfficeNumber()
worker.getGitHub()