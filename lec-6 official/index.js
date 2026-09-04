//process- independent program in running...chrome open kiya h toh it is process
//jb koi cheej ram mi load ho jati h toh it become program
//A progarm is stored in disk. when it runs, the OS creates aprocess for it nad loads the require code/data into memory(ram)
//a program can exist without runnign..but a process exists becoz somehting is currently running
//thread: small unit of that execution (process ka jo execution tha)...multiple tab open kr leye hn toh they are threads

// to know the id of process we use process object: a built-in object in Node.js provide info about the currently running applications
//here we r not using require becoz program is global

// console.log(process.pid)  //vs code mi jo run ho rha h uski id mili ess se
// //paren id ..neche vali hogi jo 2 ye dega usme neche vaali
// console.log(process.ppid)  //change hogi kyoki 1 process toh execute hote hi khtm hogya na phir dusra process shur ho gya
// console.log(process.uptime()) //time dega process k execution ka

//PROCESS.ARGUMENT VECTOR: to get input from user
//purpose of this: command-line arguments

// console.log(process.argv[4])  ...so here if in the terminal i write something in front of node index.js
//like node index.js hy, kaushal this side ...so here argv[0] = node
//                                                    argv[1] = index.js
//                                                    argv[2] = hy,
//                                                    argv[3] = kaushal  argv[4] = this   argv[5] = side
// so console.log(process.argv) will give [
//                                          "node",
//                                          "index.js",
//                                           "hy",
//                                           "kaushal",
//                                            "this",
//                                             "side"
//                                       ]
//console.log(process.argv[4]) will give output: "this"
//console.log(process.argv[6]) will give undefined kyoki 6th index exist hi nhi kr rha h


// function addition(a,b){
//     return Number(a)+Number(b)   //number likhne se hi 21 aaega agr ye nhi hoga toh 10 11 strings rhenge toh 1011 aajaega output..concatation ho jaEga
// }
// console.log(addition(process.argv[2],process.argv[3]))
//abhi toh es puri file mi just 1 fxn likha hua h jisme addtion ho rha h esleye terminal mi nos likhne se unka sum mil ja rha h
//but what ifff we have subtraction and multiplication too then so we have to create methods and then in terminal we have to mention add or subn what we eant eg: node index.js add 15 20
//this will give 35 ...node index sub 10 5 ...this will give 5

//LETS SEE HOW TO DO THIS
//we r making a command line calculator
// function calc(method){
//     if (method === "add"){
//         return Number(process.argv[3])+Number(process.argv[4])
//     }
//     if (method === "sub"){
//         return Number(process.argv[3])-Number(process.argv[4])
//     }
//     if (method === "product"){
//         return Number(process.argv[3])*Number(process.argv[4])
//     }
//     if (method === "divison"){
//         if (Number(process.argv[4])===0) return "cannot divide with 0"
//         return Number(process.argv[3])/Number(process.argv[4])
//     }
//     if (method === "power"){
//         return Number(process.argv[3])**Number(process.argv[4])
//     }
// }
// console.log(calc(process.argv[2])) // at [2] we have the name of method we want to perform ...node index.js add 15 20...[2] = add
//console.log(calc(process.argv[2])) = console.log(calc(add)) or console.log(calc(sub))...depends on node index.js sub 12 15 ...node index.js product 2 5

//ENVIRONMENT VARIABLE:
//to put our all the passwords , secret keys we can sue this variable ....
//basiclaly for security purpose ....so es file ko ham github pr push nhi krte hn ham gitignore mi likhte hn...vercel vagera jah b deploy krn ah udhr mention krdete hn


//to use the data stored in .env file
console.log(process.env.password)
console.log(process.env.secret_key) //this will give undefined ..kyoki node ko nhi pta sensitive data kis file mi stored h
//so in terminal we will write node --env-file=.env index.js   (.env is the name of file where we have stored our sensitve data)






