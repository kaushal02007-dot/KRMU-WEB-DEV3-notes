//--> OS MODULE : provide information about operating system/computer
// const os = require("os")
// console.log(os.platform())  //tells us operating system platfrom(win32, linus,darwin)
// console.log(os.hostname())  //tells us the computer name of the machine on which Node.js program is executing

//CPU information
// console.log(Os.cpus())  ...returns an array conatining information about each logical CPU on ur machine
// console.log(os.cpus().length)  ...returns the no. of logical CPUs available

//FS MODULE: allows Node.js to interact with files-delete,read,write,update
//to read: fs.readFile()
//to write: fs.writeFile()
//to append: fs.appendFile()
//to rename: fs.rename()
//to delete: fs.unlink()

const fs = require("fs")

// fs.writeFile("data.txt", "hello", (err)=>{
//     if(err) console.log(err)
//         else console.log("file written")
// })    
//Fs.write file will take 3 arguments - name of the file, actual data (file mi write krenge jo), err object - to handle the error

// fs.readFile("data.txt", "utf-8", (err,res)=>{  //Utf-8.... to read every character
//Res se jo file mi likha h vo aajata h ...  then console.log(res) ki wjh se data stored in res , hterminal mi dikh jata
//     if(err) console.log(err)
//         else console.log(res)
// })

// //to avoid the overwrite(jo phele likha hua h uske aageh kuch add krne k leye)....to have the space...give sapce in the sentence
// fs.appendFile("data.txt", " hyyy gurlll", (err)=>{
//     if(err) console.log(err)
//         else console.log("file updated")
// })

//to delete the file
// fs.unlink("data.txt", (err)=>{
//     if(err) console.log(err)
//         else console.log("file deleted successfully")
// })

// fs.writeFile("kaushal.js", "hyyy kaushal", (err)=>{
//     if(err) console.log(err)
//         else console.log("file written")
// })

// fs.readFile("kaushal.js", "utf-8", (err,res)=>{
//     if(err) console.log(err)
//         else console.log(res)
// })

// // //to avoid the overwrite....to have the space...give sapce in the sentence
// fs.appendFile("kaushal.js", " hyyy gurlll", (err)=>{
//     if(err) console.log(err)
//         else console.log("file updated")
// })

// fs.unlink("data.txt", (err)=>{
//     if(err) console.log(err)
//         else console.log("file deleted successfully")
// })

//json file mi append karana h 

const data ={name: "kaushal", Age:20,city:"Delhi", class : "12th", lastname : "tewatia", }
fs.writeFile("db.json", JSON.stringify([data],null,2), (err)=>{ // json.stringify mi 3 arguments gaye hn...data toh h vo ..jo content data variable k andr h ...data ko [] k andr rkha h ess se object aray k andr rhye
    //null : basically a replacer....jo b data h vo as it is  file k andr jaye ...if null ki jigh "name", "city" likha toh age vaali field nhi aaegi file mi...JSON.stringify(data, ["name", "Age"], 2), data hatt jae [] es mise and name,age aajaega []
    //2 : for indentation if 2 jigh 4 likha toh fields 4 space deke aaenge
    if(err) console.log(err)
        else console.log("file written")
})

//to append we have to make it read and write both...json format ko parse karana padega then write...phele data ko comment out krdo

const newData ={status : "unmarried",Age : 23}

//to read
fs.readFile("db.json", "utf-8", (err,res)=>{
    if(err) console.log(err)
        else {
     let temp = JSON.parse(res) //json.parse use kiya h jiss se ki jo phele data tha vo string mi tha but abh vo json mi hogya h 
    
    //to append
    temp.push(newData) //hamara object array mi h [{}] thats why we used push
    fs.writeFile("db.json",JSON.stringify(temp,null,2),(err)=>{  //temp vo variable h jis me jo data append ho jaaye vo save h 
        if(err) console.log(err)
            else console.log("file updated")
    })
    
        }
   

})




//to delete
// fs.unlink("db.json", (err)=>{
//     if(err) console.log(err)
//         else console.log("file deleted successfully")
// })





