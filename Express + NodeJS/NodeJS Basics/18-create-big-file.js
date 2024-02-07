// STREAMS
// streams are used to read and write sequentially for big files (readFileSync, writeFileSyns are there but not good for big files)
// 4 different streams
// - Writeable, Readable, Duplex, Transform

const { writeFileSync } = require('fs')
for(let i = 0; i < 10000; i++){
    writeFileSync('./content/big.txt',`hello World ${i}\n`, {flag: 'a'})
}

