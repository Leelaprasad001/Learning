
// FS 
// Synchronous

const { readFileSync, writeFileSync } = require('fs')

const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

// console.log(`First file content: ${first}`)
//flag is used not to change the content

writeFileSync('./content/result-sync.txt', 
    `Hello Leela Prasad, Here is the result: ${first}, ${second}`, { flag: 'a' })
    
console.log('The new "result-sync.txt" has been created!')