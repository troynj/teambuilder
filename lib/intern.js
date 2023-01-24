class Intern extends Employee{
  constructor(schoool){
    this.school = school
  }
  getSchool(){
    return this.school
  }
  getRole(){
    return "Intern"
  }
}

module.exports = Intern