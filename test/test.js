var assert = require("chai").assert;
var isLuhn = require("../index");

describe("Palindromes", function() {
  it("should return true if string is Luhn generated.", function() {
    var string = "1234567812345670";
    var result = isLuhn(string);
    assert.isTrue(result);
  });
  it("should return false if string is not Luhn generated.", function() {
    var string = "1234567812345678";
    var result = isLuhn(string);
    assert.isFalse(result);
  });
  it("should return false if empty string.", function() {
    var string = "";
    var result = isLuhn(string);
    assert.isFalse(result);
  });
  it("should return false if no parameter given.", function() {
    var string = undefined;
    var result = isLuhn(string);
    assert.isFalse(result);
  });
  it("should return false if string contains non-number characters.", function() {
    var string = "A456353DF31FS";
    var result = isLuhn(string);
    assert.isFalse(result);
  });
});
