// const Manager = require("./lib/manager.js");
// const Engineer = require("./lib/engineer.js");
// const Intern = require("./lib/intern.js");
function setRole(role) {
 
  if (role === "Manager") return `<i class="fas fa-mug-hot"></i> Manager`
  else if (role === "Engineer") return `<i class="fas fa-glasses"></i> Engineer`
  else if (role === "Intern") return `<i class="fas fa-user-graduate"></i> Intern`
  else {console.log("NO CONDITION MET - GET ROLE")}
  return "";
}

function setDetail(data) {
  if(data.officeNumber) {
    return`<div class="detail">Office Number: ${data.officeNumber}</div>`
  }
  else if(data.github) {
    return`<div class="detail">GitHub: ${data.github}</div>`
  }
  else if(data.school) {
    return`<div class="detail">School: ${data.school}</div>`
  }
}


function generateCard(data) {
  const role = setRole(data.getRole())
  const detail = setDetail(data)
 return`
      <article class="card">
        <section class="title">
          <h2 class="name">${data.name}</h2>
          <h3 class="role">${role}</h3>
        </section>
        <section class="info">
          <div class="id">ID: ${data.id}</div>
          <div class="email">Email: <a href="" class="link">${data.email}</a></div>
          ${detail}
        </section>
      </article>`
}

module.exports = generateCard