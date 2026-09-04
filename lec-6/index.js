const fs = require("fs")
//PATH MODULE: helps work with file and folder paths

// const path = require("path")
// const file = path.join ("home","data","user.json") //mutilple words likh kr unko join krne ki leye ham use krenge apth.join
// console.log(file)
// //this uppr vala gave us basic form of url

// //to have the directory name 
// console.log(path.dirname("home/user/data/file.text")) //this will give only home/user/data ....not file name as it is giving only directory name
// //to have file name
// console.log(path.basename("home/user/data/file.text"))  //this will file.txt

// //to have extension name
// console.log(path.extname("home/user/data/file.text")) //give .txt

//create folder using code...here we r creating a directory inside it there is a home folder and inside home folder we have user folder then in user folder we have file
// const filePath = path.join("home","data","user","file.txt")  //file.txt is a file not folder

//console.log(filePath)

//creating a directory
// fs.mkdir(filePath,{recursive:true},(err)=>{  //recurive true ka mtlb h parent directory mile na mile ...jha ho vhyi directory bna
//     if(err) console.log(err)
//         else {
//         fs.writeFile(filePath, "", (err) => {  //file path se ye hoga ki vo khud dekh lega acha home folder h ...home k andr adat h data k andr user ...or user k andr banegi file.txt
//             if (err) console.log(err)
//             else console.log("file written")
//         })
//     }
        
// }); 



//crypto module: password ko hash mi krdeta h ...proviode security features
// const crypto = require("crypto")

// let password ="kaushal@123"

// //to make it in encrypted form ...by using a algorithm called - secure hashing algorithm256(sha256)
// const encrypt = crypto.createHash("sha256").update(password).digest("hex") //update(password) bata h ki konse password ko aap encrypt krna chaate ho....digest("hex") se hame ye hex mi de dega password so that we can read it
// //always hash hi compare hote hn na ki passwords ...new entered hash is compared with old hash if both are same then we will get entry
// console.log(encrypt)

//dns module:converts domain names into ip address
const dns = require("dns")
//if u want ip address of any site like google.com so
dns.lookup("google.com",(err,address,family)=>{  //lookup provide ip address of site ...address se ip address provide kaarya gya h 
    console.log(address)
    console.log(family)  //4 deya usne family se (fmaily provides which ip address fmaily/type dns returned)
})