const { expect } = require("chai");
const { name, height, message } = require("../index.js");

describe("what-is-a-test", () => {
  describe("Name", () => {
    it('returns "Susan"', () => {
      expect(name) == "Susan";
      
    });
  });

  describe("Height", () => {
    it("is less than 40", () => {
      expect(height) > 40;
     
    });
  });

  describe("Message", () => {
    it("gives the name and height", () => {
      expect(message) == (name) && (height)
     
    });
  });
});
