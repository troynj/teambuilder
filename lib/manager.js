class Manager extends Employee {
  constructor(officeNumber){
    this.officeNumber = officeNumber
  }
  getRole(){return "manager"}
}

module.exports = Manager