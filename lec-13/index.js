const express = require("express")
const morgan = require("morgan")
const app = express()
const noteRoutes =require("./routes/noteRoutes")

//ess neche vvali line ko "/api",noteRoutes s euppr hi likhna h then it will give detail like this server is running on port 3000
//::ffff:127.0.0.1 - - [09/Sep/2026:08:28:19 +0000] "GET /api/notes HTTP/1.1" 200 526 "-" "Thunder Client (https://www.thunderclient.com)"
app.use(morgan("combined"))  //esko yha use krlo ...koi request aegi toh yha check hoegi ki kya request aayi h or response kya h 
app.use ("/api", noteRoutes)    // jo router create kiya hua h usko edhr use krenge
// /api kyo likhna h toh kuch common rkhne k leye menans ye api tk ka part vo jaega index.js mi ab uske baad maan lo teacher h toh teacherRoutes mi jaegi 
//aise hi edhr /api/notes jaeega notesRoutes
app.use(express.json())  //post krte tym ye vaali likhni h to handle the json format so that usko parse krda de or internal server error na aaye
//body mi jakr phele jo data post kran h vo likhna hoga
// example like this:{
//   "title": "cc",
//   "description": "cc class",
//   "note": "cc note",
//   "link": "geeksForgeeks.com",
//   "author": "david",
//   "createdOn" : "02-09-2026"
// }




app.listen(3000,()=>{
    console.log("server is running on port 3000")
});

//etna krna k baad localhost pr ja kr check the response then we will do create(post method)

//ab edhr kuch b nhi krna h noteRoutes ki saari request edhr khud de aajaenge

//BuILT IN MIDDLEWARE
//app.use(express.json()) ...express.json() is a built in middleware  //json format data mi data h toh usko parse kjrna hoga toh ye middleware
//app.use(express.urlencoded({extended:true}))   // express.urlencoded : form data ko parse krna ho toh ...form aaya or usko parse krna h  toh ...frontend se nested data bhj rehye hn toh esleye so we use extended:true

//MORGAN: npm i morgan...3rd party middleware
// as developer m chhati hu ki mujhe ye pata chle ki jb koi api bhji h(request hit ho ) toh toh kosni request aayi h(method kya h get,post,put) or respone kya gya h (200,401 etc)

//1st way hr fucntion k coresponding likh den console.log("response 200") in controllers
// const {notes} = require("../models/data")

// const getNotes = (req,res)=>{
//     res.status(200).send(notes)  //jb ye request hit hogi toh frontend pr notes bhjenge
// console.log("response 200")

// }


//CORS: 3rd party middleware
//frontend se request aayi port no: 5173 
//
// backend ka port no 3000 h ....so ham backend ko bta te hn ki cors mi daal k ki 5173 port no se aarhyi h request -- cors(5173)  cors(5173,5123) 2 ports se aarhyi h request

//another 3rd pary middle ware
//cookie-parser : backend mi cookie  ki value ko get krne k leye


//CUSTOM MIDDLEWARE:
//making file isAuhtorized in middleware foder

//middleware chaining: more than middleware saath mi use kiye hue hn

