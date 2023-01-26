const Manager = require("../lib/Manager.js");

describe("Manager", () => {
  // Test for all use cases when initializing a new Manager object
  describe("Initialization", () => {
    it("should create an object with a name, id, and email if provided valid arguments", () => {
      //Arrange
      const name = "Norton";
      const id = 123;
      const email = "norton@email.com";
      const officeNumber = 456
      //Act
      const emp = new Manager(name, id, email, officeNumber);
      //Assert
      expect(emp.name).toEqual(name);
      expect(emp.id).toEqual(id);
      expect(emp.email).toEqual(email);
      expect(emp.officeNumber).toEqual(officeNumber);
    });
  });
  // Test for all error cases when initializing a new Child object with an incorrect name property
  describe("name", () => {
    // Exception test
    it("should throw an error if provided a non-string value for the 'name' arument", () => {
      // Arrange
      const name = null;
      //Act
      const cb = () => new Manager(name, 123, "norton@email.com", 456);
      const err = new Error(
        "Expected parameter 'name' to be a non-empty string"
      );
      // Assert
      expect(cb).toThrowError(err);
    });
  });
  describe("id", () => {
    // Exception test
    it("should throw an error if provided a non-number value for the 'id' arument", () => {
      // Arrange
      const id = null;
      const cb = () => new Manager("name", id, "norton@email.com", 456);
      const err = new Error("Expected parameter 'id' to be a number");
      // Assert
      expect(cb).toThrowError(err);
    });
  });
  describe("email", () => {
    // Exception test
    it("should throw an error if provided a non-string value for the 'email' argument", () => {
      // Arrange
      const email = null;
      const cb = () => new Manager("name", 123, email, 456);
      const err = new Error(
        "Expected parameter 'email' to be a non-empty string"
      );
      // Assert
      expect(cb).toThrowError(err);
    });
  });
  describe("officeNumber", () => {
    // Exception test
    it("should throw an error if provided a non-string value for the 'officeNumber' argument", () => {
      // Arrange
      const officeNumber = null;
      const cb = () => new Manager("name", 123, "norton@email.com", officeNumber);
      const err = new Error(
        "Expected parameter 'officeNumber' to be a number"
      );
      // Assert
      expect(cb).toThrowError(err);
    });
  });
  describe("getName", () => {
    it("Should throw an error if 'getName()' doesnt return the appropriate name", () => {
      const emp = new Manager("Norton", 22, "norton@email.com", 456);
      expect(emp.getName()).toBe("Norton");
    });
  });
  describe("getID", () => {
    it("Should throw an error if 'getId()' doesnt return the appropriate name", () => {
      const emp = new Manager("Norton", 22, "norton@email.com", 456);
      expect(emp.getId()).toBe(22);
    });
  });
  describe("getEmail", () => {
    it("Should throw an error if 'getEmail()' doesnt return the appropriate email", () => {
      const emp = new Manager("Norton", 22, "norton@email.com", 456);
      expect(emp.getEmail()).toBe("norton@email.com");
    });
  });
  describe("getRole", () => {
    it("Should throw an error if 'getRole()' doesnt return the appropriate role", () => {
      const emp = new Manager("Norton", 22, "norton@email.com", 456);
      expect(emp.getRole()).toBe("Manager");
    });
  });
  describe("getOfficeNumber", () => {
    it("Should throw an error if 'getOfficeNumber()' doesnt return the appropriate role", () => {
      const emp = new Manager("Norton", 22, "norton@email.com", 456);
      expect(emp.getOfficeNumber()).toBe(456);
    });
  });
});
