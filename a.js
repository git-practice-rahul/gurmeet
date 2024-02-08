// const EventEmitter = require('events')
// const eventEmitter = new EventEmitter();

// eventEmitter.on('tutorial', (num1, num2)=>{
//     console.log("tutorial event has occurred", num1 + num2);
// })

// eventEmitter.emit('tutorial', 1,2);


// class Person extends EventEmitter{
//     constructor(name){ 
//         super(); 
//         this._name = name;
//     }

//     get name(){
//         return this._name;
//     }
// }

// let pedro = new Person("pedro");
// pedro.on('name', ()=>{
//     console.log("my name is : ", pedro.name);
// })

// pedro.emit('name')


// =========================================================================================================================================================
// const readline = require('readline')

// const rl = readline.createInterface({
//     input: process.stdin, 
//     output: process.stdout
// })

// rl.question("What is 2 + 5 ?\n",
// (userInput)=>{
//     userInput = userInput.trim();
//     console.log(userInput);
//     rl.setPrompt("this is a prompt in between\n")
//     rl.prompt();
//     rl.on('line', ()=>{
//         console.log("new line inserted\n")
//     })
//     rl.close();
// });

// rl.on('close', ()=>{
//     console.log("console closed\n");
// })

// ==================================================================================================================================================

// const fs = require('fs')

// create a file 
// fs.writeFile('example.txt', "this is an example", (err)=>{
//     if(err) console.log(err);
//     else {
//         console.log("file successfully created")
//         fs.readFile('example.txt','utf8',(err, file)=>{
//             if(err) console.log(err);
//             else console.log("file is : ", file);
//         })
//     }
// })

// fs.rename('example.txt', 'example2.txt', (err)=>{
//     if(err) console.log(err);
//     else console.log("successfully renamed");
// })

// fs.appendFile('example.txt', "new data", (err)=>{
//     if(err) console.log(err);
//     else console.log("data appended");
// })

// fs.unlink('example.txt', (err)=>{
//     if(err) console.log(err);
//     else console.log("successfully deleted");
// })


// using folders with fs

// fs.mkdir("tutorial", (err)=>{
//     if(err) console.log(err);
//     else {
//         console.log("folder created");
//         // fs.rmdir('tutorial', (err)=>{
//         //     if(err) console.log(err);
//         //     else console.log("folder deleted");
//         // })
//         fs.writeFile('./tutorial/file.txt', "folder inside file ", (err)=>{
//             if(err) console.log(err);
//             else console.log("file created");
//         })
//         //To delete a folder with files first we need to delete the files and then delete the folder
        

//     }
// })

//To delete a folder with multiple files we can use this :- 
// fs.readdir('tutorial', (err, files)=>{
//     if(err) console.log(err)
//     else {
//         console.log(files);  
//         for(let file of files){
//             fs.unlink(`./tutorial/${file}`, (err)=>{
//                 if(err) console.log(err);
//                 else console.log(`file ${file} deleted`);
//             })
//         }

//         fs.rmdir('tutorial', (err)=>{
//             if(err) console.log(err);
//             else console.log("folder deleted");
//         })
//     }
// })


//===================================================================================================================================================================

// git version control system 


// this is a  change