let assert = require("assert");
let Phrase = require("../index.js");

describe("Phrase", function() {

  describe("#palindrome", function() {

    it("should return false for a non-palindrome", function() {
      let nonPalindrome = new Phrase("apple");
      assert(!nonPalindrome.palindrome());
    });

    it("should return true for a plain palidrome", function() {
      let plainPalindrome = new Phrase("racecar");
      assert(plainPalindrome.palindrome());
    });

    it("should return true for a mixed-case plaindrome", function() {
      let mixedCase = new Phrase("RaceCar");
      assert(mixedCase.palindrome());
    });

    it("should return true for a palindrome with punctuation", function() {
      let puntuactedPalindrome = new Phrase("Madam, I'm Adam.");
      assert(puntuactedPalindrome.palindrome());
    });
  });

  describe("#letters", function() {
    it("should return only letters", function() {
      let puntuactedPalindrome = new Phrase("Madam, I'm Adam");
      assert.strictEqual(puntuactedPalindrome.letters(), "MadamImAdam");
    });
  });
});
