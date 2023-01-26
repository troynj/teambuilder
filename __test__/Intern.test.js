const Intern = require("../lib/Intern.js");

describe("Intern", () => {
  // Test for all use cases when initializing a new Intern object
  describe("Initialization", () => {
    it("should create an object with a name, id, and email if provided valid arguments", () => {
      //Arrange
      const name = "Norton";
      const id = 123;
      const email = "norton@email.com";
      const school = "zUniversity"
      //Act
      const emp = new Intern(name, id, email, school);
      //Assert
      expect(emp.name).toEqual(name);
      expect(emp.id).toEqual(id);
      expect(emp.email).toEqual(email);
      expect(emp.school).toEqual(school);
    });
  });
  // Test for all error cases when initializing a new Child object with an incorrect name property
  describe("name", () => {
    // Exception test
    it("should throw an error if provided a non-string value for the 'name' arument", () => {
      // Arrange
      const name = null;
      //Act
      const cb = () => new Intern(name, 123, "norton@email.com", "zUniversity");
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
      const cb = () => new Intern("name", id, "norton@email.com", "zUniversity");
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
      const cb = () => new Intern("name", 123, email, "zUniversity");
      const err = new Error(
        "Expected parameter 'email' to be a non-empty string"
      );
      // Assert
      expect(cb).toThrowError(err);
    });
  });
  describe("school", () => {
    // Exception test
    it("should throw an error if provided a non-string value for the 'school' argument", () => {
      // Arrange
      const school = null;
      const cb = () => new Intern("name", 123, "norton@email.com", school);
      const err = new Error(
        "Expected parameter 'school' to be a non-empty string"
      );
      // Assert
      expect(cb).toThrowError(err);
    });
  });
  describe("getName", () => {
    it("Should throw an error if 'getName()' doesnt return the appropriate name", () => {
      const emp = new Intern("Norton", 22, "norton@email.com", "zUniversity");
      expect(emp.getName()).toBe("Norton");
    });
  });
  describe("getID", () => {
    it("Should throw an error if 'getId()' doesnt return the appropriate name", () => {
      const emp = new Intern("Norton", 22, "norton@email.com", "zUniversity");
      expect(emp.getId()).toBe(22);
    });
  });
  describe("getEmail", () => {
    it("Should throw an error if 'getEmail()' doesnt return the appropriate email", () => {
      const emp = new Intern("Norton", 22, "norton@email.com", "zUniversity");
      expect(emp.getEmail()).toBe("norton@email.com");
    });
  });
  describe("getRole", () => {
    it("Should throw an error if 'getRole()' doesnt return the appropriate role", () => {
      const emp = new Intern("Norton", 22, "norton@email.com", "zUniversity");
      expect(emp.getRole()).toBe("Intern");
    });
  });
  describe("getSchool", () => {
    it("Should throw an error if 'getSchool()' doesnt return the appropriate role", () => {
      const emp = new Intern("Norton", 22, "norton@email.com", "zUniversity");
      expect(emp.getSchool()).toBe("zUniversity");
    });
  });
});
