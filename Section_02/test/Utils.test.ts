import { getStringInfo, StringUtils, toUpperCase } from "../src/app/Utils";

describe("Utils test suite", () => {
  describe("StringUtils Test", () => {
    let sut: StringUtils;

    beforeEach(() => {
      sut = new StringUtils();
    });

    it("should return correct uppercase", () => {
      // arrange
      const expected = 'ABC';

      // act
      const actual = sut.toUpperCase("abc");

      // assert
      expect(actual).toBe(expected);
    });

    it("should throw error on invalid argument - function", () => {
      function expectError() {
        const actual = sut.toUpperCase("");
      }

      expect(expectError).toThrow();
      expect(expectError).toThrow("Invalid argument");
    });

    it("should throw error on invalid argument - arrow function", () => {
      expect(() => {
        sut.toUpperCase("");
      }).toThrowError("Invalid argument");
    });

    it("should throw error on invalid argument - try/catch", (done) => {
      try {
        sut.toUpperCase("");
        done("GetStringInto should  throw error for invalid argument");
      } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect(error).toHaveProperty("message", "Invalid argument");
        done();
      }
    });
  });

  describe("ToUpperCase examples", () => {
    it.each([
      { input: "abc", expected: "ABC" },
      { input: "My-String", expected: "MY-STRING" },
      { input: "deF", expected: "DEF" },
    ])("$input toUpperCase should be $expected", ({ input, expected }) => {
      const actual = toUpperCase(input);
      expect(actual).toBe(expected);
    });
  });

  describe("getStringInfo for arg My-String should", () => {
    it("return the correct length", () => {
      const actual = getStringInfo("My String");
      expect(actual.characters.length).toBe(9);
    });

    it("return the correct lower case", () => {
      const actual = getStringInfo("My String");
      expect(actual.lowerCase).toBe("my string");
    });

    it("return the correct upper case", () => {
      const actual = getStringInfo("My String");
      expect(actual.upperCase).toBe("MY STRING");
    });

    it("return the correct characters", () => {
      const actual = getStringInfo("My String");
      expect(actual.characters).toContain<string>("M");
      expect(actual.characters).toEqual([
        "M",
        "y",
        " ",
        "S",
        "t",
        "r",
        "i",
        "n",
        "g",
      ]);
    });

    it("return the correct extra info", () => {
      const actual = getStringInfo("My String");
      expect(actual.extraInfo).toBeDefined();
    });

    it("return the correct extra info", () => {
      const actual = getStringInfo("My String");
      expect(actual.extraInfo).toEqual({});
    });
  });
});
