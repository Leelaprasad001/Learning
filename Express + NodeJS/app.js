//npm - global command, comes with node
//npm --version

//local dependency - use it only in this particular project 
//install a package locally to the current directory
//npm i <packageName>

//global dependency - use it in any project
//npm install -g <packageName>
//sudo npm install -g <packageName> (mac)

//package.json - manifest file (stores important info about project/package)
//dependencies - packages needed for running the application
//devDependencies - packages needed during development of the application
//scripts - commands that can be run on the terminal

//to add a new script:
// "scripts": {
//     "start": "node index.js",
//     ...
// }

//run the start script from the terminal
//npm start

//create a new folder and make it a Node Package Manager module
//from within the new folder run the following command
//npm init -y

//publishing your own modules 
//npm publish

//to install a package from a specific version
//npm i <packageName>@<versionNumber>

//manual approach (create package.json in the root, create bin directory, create a file inside bin directory, add the shebang line, run npm link)
//npm link
//npm unlink

//npm init (step by step, press enter to skip)
//npm init -y (everything default)

const _ = require('lodash');

const items = [1, [2, [3, [4]]]];

const newItems = _.flattenDeep(items);

console.log(newItems);