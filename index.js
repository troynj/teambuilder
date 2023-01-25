const fs = require("fs");
const inquirer = require("inquirer");
// const Employee = require("./lib/employee.js");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const genBeg = require("./src/beginning");
const generateCard = require("./src/card-template");
const genEnd = require("./src/end");
const teamArr = []

async function mainMenu() {
  let finish = false;
  do {
    await inquirer
      .prompt([
        {
          type: "list",
          name: "action",
          message: "Add a team member:",
          choices: ["Engineer", "Intern", new inquirer.Separator(), "Finish"],
        },
      ])
      .then(async ({ action }) => {
        switch(action) {
          case "Finish": finish = true
          break;
          case "Engineer": await addEmployee(action, "github")
          break;
          case "Intern": await addEmployee(action, "school");
          break;
        }
      });
  } while (finish === false);
}

async function addEmployee(type, p_detail) {
  await inquirer
    .prompt([
      {
        name: "name",
        message: `Enter the ${type}'s name: `,
      },
      {
        name: "id",
        message: `Enter the ${type}'s employee ID: `,
      },
      {
        name: "email",
        message: `Enter the ${type}'s email address: `,
      },
      {
        name: "detail",
        message: `Enter the ${type}'s ${p_detail}: `,
      },
    ])
    .then(({ name, id, email, detail }) => {
      switch (type) {
        case "Manager":
          const man = new Manager(name, id, email, detail);
          teamArr.push(man)
          break;
        case "Engineer":
          const eng = new Engineer(name, id, email, detail);
          teamArr.push(eng)
          break;
        case "Intern":
          const int = new Intern(name, id, email, detail);
          teamArr.push(int)
          break;
        default:
          console.log("no conditions met");
      }
    });
}

async function appToFile(data) {
  fs.appendFile(
    "dist/index.html",
    generateCard(data),
    (err) => err && console.log(err)
  );
}

async function init() {
  fs.writeFile("dist/index.html", genBeg(), (err) => err && console.log(err));
  await addEmployee("Manager", "office number");
  await mainMenu();
  // teamArr.forEach(el => appToFile(el))
  console.log(teamArr)
  await appToFile(teamArr[0])
  await appToFile(teamArr[1])
  await appToFile(teamArr[2])
  await appToFile(teamArr[3])
  await appToFile(teamArr[4])
  fs.appendFile("dist/index.html", genEnd(), (err) => err && console.log(err));
  console.log("fin")
}

init();
