var tree = require('../');
var assert = require('assert');

describe("Reading file directory", function() {
    var files = tree(__dirname + "/animals");

    it("should return an array of 3 files", function() {
        assert(files.length === 3, "Array is not of the right length");
    });

    it("should have an entry with the directory 'duck'", function() {
        var found = false;
        files.forEach(function(file) {
            if (file.files) {
                found = true;
            }
        });
        assert(found, "No directory was found");
    });
});
