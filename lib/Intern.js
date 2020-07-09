const Employee = require("./Employee")

// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
class Intern extends Employee {
    
    constructor(name, id, email, school){
        super(name, id, email)
    this.school = school;
    
    }
    getRole(){
    return "Intern"
    }
    getSchool(){
        return this.school
        // console.log(`This persons attends ${this.school}`)
    }


}


module.exports = Intern;

const worker = new Intern ("cass", 34985, 'cass@fake.com', "University of Washington" );
worker.getName()
worker.getId()
worker.getEmail()
worker.getRole()
worker.getSchool()