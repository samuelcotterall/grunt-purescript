"use strict";

var grunt = require("grunt");

exports.purescript = {
    basic: function (test) {
        test.expect(1);
        test.ok(grunt.file.exists("tmp/out.js"), "Output file does not exist");
        test.done();
    }
};
