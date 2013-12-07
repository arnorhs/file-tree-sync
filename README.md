# file-tree-sync

A function that iterates recursively through a directory structure and returns it as a normal array. Supports glob syntax to ignore files if needed.

### Usage

Installation:
```sh
$ npm install file-tree-sync
```

Use in your code:
```
var treeify = require('file-tree-sync');

var myTree = treeify(process.cwd(), ['.*']);
```

It returns an array that looks like this:
```json
[
  {
    "name": "<name of file>",
    "fullpath": "<full path of file>",
    "relativePath": "<path relative to the directory you specified>"
    "files": [....] // array of the same type of object
  },
  ...
]
```

### TODO
- Write unit tests
- Handle file permission errors
- An async version could be useful for other use cases than I had in mind initially

### License
MIT license
