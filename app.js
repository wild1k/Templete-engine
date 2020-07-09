const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./output/htmlRenderer");

const team = [];

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

function buildTeam() {
    inquirer.prompt({
        type: "checkbox",
        name: "choice",
        message: "What roles would you like to add to your team?",
        choices: ["Manager", "Engineer", "Intern", "finished"]
    }).then(function (data) {
        console.log(data);
        
        switch (data.choice[0]) {
            case "Manager":
                addManager();
                break;

            case "Engineer":
                addEngineer();
                break;

            case "Intern":
                addIntern();
                break;

            default:
                console.log("You finished making your team!")
                break;
        }
   
    })

}


  

    function addManager(){
    inquirer.prompt([
    {
        type: "input",
        name: "name",
        message: "Manager's name?",
    },
    {
        type: "input",
        name: "id",
        message: "Manager's id?",
    },
    {
        type: "input",
        name: "email",
        message: "Manager's email?",
    },
    {
        type: "input",
        name: "officeNumber",
        message: "Manager's office Number?",
    },
]).then(function(answers){
    const teamManager = new Manager(answers.name, answers.id, answers.email);
    team.push(teamManager);
    console.log(`New Manager ${JSON.stringify(teamManager)} is added`);
    buildTeam();
    
})};

    function addEngineer(){
    inquirer.prompt([
    {
        type: "input",
        name: "name",
        message: "Engineer's name?",
    },
    {
        type: "input",
        name: "id",
        message: "Engineer's id?",
    },
    {
        type: "input",
        name: "email",
        message: "Engineer's email?",
    },
    {
        type: "input",
        name: "GitHubUser",
        message: "Engineer's GitHub username?",
    },
]).then(function(answers){
    const teamEngineer = new Engineer(answers.name, answers.id, answers.email, answers.GitHubUser);
    team.push(teamEngineer);
    console.log(`New Engineer ${teamEngineer} is added`);
    buildTeam();
    
})};

buildTeam();


// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
