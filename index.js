var fs = require('fs');
var path = require('path');
var matcher = require('minimatch');

function readDir(dirname, matchers, rootDir) {
    return fs.readdirSync(dirname).map(function(file) {
        
        // Exclude files
        for (var i = 0; i < matchers.length; i++) {
            if (matcher(file, matchers[i])) {
                return null;
            }
        }

        var filepath = path.join(dirname, file);
        var obj = {
            name: file,
            fullpath: filepath,
            relativePath: path.relative(rootDir, filepath)
        };
        if (fs.statSync(filepath).isDirectory()) {
            obj.files = readDir(filepath, matchers, rootDir);
        }

        return obj;
    }).filter(Boolean);
}

module.exports = function(rootDir, matchers) {
    matchers = matchers || [];
    return readDir(rootDir, matchers, rootDir);
};
