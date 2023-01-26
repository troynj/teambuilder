const Engineer = require("../lib/Engineer.js");

describe("Engineer", () => {
  // Test for all use cases when initializing a new Engineer object
  describe("Initialization", () => {
    it("should create an object with a name, id, and email if provided valid arguments", () => {
      //Arrange
      const name = "Norton";
      const id = 123;
      const email = "norton@email.com";
      const github = "norty"
      //Act
      const emp = new Engineer(name, id, email, github);
      //Assert
      expect(emp.name).toEqual(name);
      expect(emp.id).toEqual(id);
      expect(emp.email).toEqual(email);
      expect(emp.github).toEqual(github);
    });
  });
  // Test for all error cases when initializing a new Child object with an incorrect name property
  describe("name", () => {
    // Exception test
    it("should throw an error if provided a non-string value for the 'name' arument", () => {
      // Arrange
      const name = null;
      //Act
      const cb = () => new Engineer(name, 123, "norton@email.com", "norty");
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
      const cb = () => new Engineer("name", id, "norton@email.com", "norty");
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
      const cb = () => new Engineer("name", 123, email, "norty");
      const err = new Error(
        "Expected parameter 'email' to be a non-empty string"
      );
      // Assert
      expect(cb).toThrowError(err);
    });
  });
  describe("github", () => {
    // Exception test
    it("should throw an error if provided a non-string value for the 'github' argument", () => {
      // Arrange
      const github = null;
      const cb = () => new Engineer("name", 123, "norton@email.com", github);
      const err = new Error(
        "Expected parameter 'github' to be a non-empty string"
      );
      // Assert
      expect(cb).toThrowError(err);
    });
  });
  describe("getName", () => {
    it("Should throw an error if 'getName()' doesnt return the appropriate name", () => {
      const emp = new Engineer("Norton", 22, "norton@email.com", "norty");
      expect(emp.getName()).toBe("Norton");
    });
  });
  describe("getID", () => {
    it("Should throw an error if 'getId()' doesnt return the appropriate name", () => {
      const emp = new Engineer("Norton", 22, "norton@email.com", "norty");
      expect(emp.getId()).toBe(22);
    });
  });
  describe("getEmail", () => {
    it("Should throw an error if 'getEmail()' doesnt return the appropriate email", () => {
      const emp = new Engineer("Norton", 22, "norton@email.com", "norty");
      expect(emp.getEmail()).toBe("norton@email.com");
    });
  });
  describe("getRole", () => {
    it("Should throw an error if 'getRole()' doesnt return the appropriate role", () => {
      const emp = new Engineer("Norton", 22, "norton@email.com", "norty");
      expect(emp.getRole()).toBe("Engineer");
    });
  });
  describe("getGithub", () => {
    it("Should throw an error if 'getGithub()' doesnt return the appropriate role", () => {
      const emp = new Engineer("Norton", 22, "norton@email.com", "norty");
      expect(emp.getGithub()).toBe("norty");
    });
  });
});
