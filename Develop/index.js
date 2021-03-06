// Packages and files needed for this application
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const fs = require ('fs');
const util = require('util')
const inquirer = require('inquirer');

//used to generate html with team member cards
const generateHTML = require('./util/generateHTML');

const writeHTML = util.promisify(fs.writeFile)
 

//array of objects of all employees
const allEmployees = [];

// on start, prompts user to answer questions about team members
const init = async () => {
     const{name,id,email,role} = await inquirer.prompt([
     {
         type: 'input',
         name: 'name',
         message: 'What is the employee name?',
     },
     {
         type: 'input',
         name: 'id',
         message: 'What is your employee iD'
     },
     { 
         type:'input',
         name:'email',
         message: 'What is your email?',
     },

     {
         type:'list',
         name:'role',
         message:'What is your role in the team?',
         choices:['Manager', 'Engineer', 'Intern']
     }
    ])
    //switch cases used depending on what the role on the team is
    //also adds team member to allEmployees array
        switch (role) {
            case 'Manager':
                const {officeNumber} = await inquirer.prompt({
                    type:'input',
                    message:'What is your office number',
                    name:'officeNumber'
                })
                const newManager = new Manager(name,id,email,officeNumber);
                allEmployees.push(newManager)
                break;

            case 'Engineer':
                const {github} = await inquirer.prompt({
                    type:'input',
                    message:'What is your github username?',
                    name:'github'
                })
                const newEngineer = new Engineer(name,id,email,github);
                allEmployees.push(newEngineer)
                break;

            case 'Intern':
                const {school} = await inquirer.prompt({
                    type:'input',
                    message:'What school did you go to?',
                    name:'school'
                })
                const newIntern = new Intern(name,id,email,school);
                allEmployees.push(newIntern)
                break;

            default:
                break;
        }
    //verifies the amount of team members
    const {moreEmployees} = await inquirer.prompt({
        type:'confirm',
        name:'moreEmployees',
        message:'Do you have more employees to add to the team?'
    })
    if(moreEmployees){
        init()
    } else {
        // console.log(allEmployees);
        const newHTML = generateHTML(allEmployees);
        await writeHTML(`index.html`, newHTML)
    }
}
 
// Function call to initialize app
init();
 