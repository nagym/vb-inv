const Plugin = require("../lib/binding.js");
const assert = require("assert");

assert(Plugin, "The expected function is undefined");

function testBasic()
{
    const result =  Plugin("hello");
    assert.strictEqual(result, "world", "Unexpected value returned");
}

assert.doesNotThrow(testBasic, undefined, "testBasic threw an expection");

console.log("Tests passed- everything looks OK!");