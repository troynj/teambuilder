const fs = require("fs");
const inquirer = require("inquirer");
// const Employee = require("./lib/employee.js");
const Manager = require("./lib/manager.js");
const Engineer = require("./lib/engineer.js");
const Intern = require("./lib/intern.js");
const genBeg = require("./src/beginning.js");
const generateCard = require("./src/markdown.js");
const genEnd = require("./src/end");

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
        action === "Finish" ? (finish = true) : await addEmployee(action);
      });
  } while (finish === false);
}

async function addEmployee(type) {
  await inquirer
    .prompt([
      {
        name: "name",
        message: `Enter the team ${type}'s name: `,
      },
      {
        name: "id",
        message: `Enter the team ${type}'s employee ID: `,
      },
      {
        name: "email",
        message: `Enter the team ${type}'s email address: `,
      },
      {
        name: "detail",
        message: `Enter the team ${type}'s office number: `,
      },
    ])
    .then(({ name, id, email, detail }) => {
      switch (type) {
        case "Manager":
          const man = new Manager(name, id, email, detail);
          appToFile(man);
          break;
        case "Engineer":
          const eng = new Engineer(name, id, email, detail);
          appToFile(eng);
          break;
        case "Intern":
          const int = new Intern(name, id, email, detail);
          appToFile(int);
          break;
        default:
          console.log("no conditions met");
      }
    });
}

function appToFile(data) {
  fs.appendFile(
    "dist/index.html",
    generateCard(data),
    (err) => err && console.log(err)
  );
}

async function init() {
  fs.writeFile("dist/index.html", genBeg(), (err) => err && console.log(err));
  await addEmployee("Manager");
  await mainMenu();
  fs.appendFile("dist/index.html", genEnd(), (err) => err && console.log(err));
}

init();
