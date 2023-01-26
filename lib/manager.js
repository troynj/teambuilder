const Employee = require("./Employee")


class Manager extends Employee {
  constructor(name, id, email, officeNumber){
    if (typeof name !== "string" || !name.trim().length) {
      throw new Error("Expected parameter 'name' to be a non-empty string");
    }
    
    if (typeof id !== "number" || isNaN(id)) {
      throw new Error("Expected parameter 'id' to be a number");
    }
    
    if (typeof email !== "string" || !email.trim().length) {
      throw new Error("Expected parameter 'email' to be a non-empty string");
    }
    
    if (typeof officeNumber !== "number" || isNaN(id)) {
      throw new Error("Expected parameter 'officeNumber' to be a number");
    }

    super(name, id, email)
    this.officeNumber = officeNumber
  }
  getRole(){return "Manager"}
  getOfficeNumber(){return this.officeNumber}
}

module.exports = Manager