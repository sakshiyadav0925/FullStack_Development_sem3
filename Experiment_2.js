const fs = require('fs') ;
//create/write
fs.writeFileSync('student.txt','B.tech Node.js Lab');

//read
const data = fs.readFileSync('student.txt', 'utf18' );
console.log(data) ;
//write
fs.writeFileSync('student.txt','Name: Rahul\nSubject: Full Stack Development') ;
console.log('File created successfully')

//update
fs.appendFileSync('student.txt' ,'\nExperiment 2 completed. ') ;
console.log('File updated') ;
console.log(data) ;
