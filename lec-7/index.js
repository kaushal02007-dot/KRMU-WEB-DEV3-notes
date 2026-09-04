const http = require("http")

//here client and server will communicate ..jb ye hoga we will use http modeule
const server = http.createServer((req,res)=>{ //http.createServer will help in creating ur http //req - frontend se request aari h backend mi ..res : backend to frontend koi response hoga
    // res.write("<h1> hello world </h1>")  //ye data render kra do frontend pr
    // res.write("<p> node js </p>")
    // res.write("<span> 3rd sem </span>") // when i added this it will only show hello world becoz serevr resatrt nhi kieya
    // //to restart the server: ctrl c krdo terminal ko then node index.js
    // res.end()  //jo request frontend ni ki h usko end karado

//    console.log( req.url)  //frotnend se kosni url ki request aari h ...about page ki ...home pagfe ki etc
//    res.end()  //to end the buffering
   // http://localhost:3000/ here url is /
   //http://localhost:3000/about   url is /about
   //http://localhost:3000/about/team  url is /about/team so toh console mi ye delkhaega jo aap explorer pr jakr localhot:3000 k saamne likh doge
//    if(req.url === "/"){
//     res.write("<h1> home page </h1>")
//     res.end()
//    }
//     if(req.url === "/about"){
//     res.write("<h1> about page </h1>")
//     res.end()
//    } // form line 16 to 17 if we will write localhost:3000/ then hame home page likha milega
//    //if localhost:3000/about then hame about page likha milega
//    //yha bracket k baad b res.end() likhna h varna /contact will start buffering 
//    res.end()


//HTTP METHODS
// console.log(req.method) //will print the request method ...thunder client mi ..url kihne vaale box k left side mi jo get post put dleet likhe hue hn vo hn methods ..jo selected hoga vo mehtod consoel mi print ho jaaerga

// res.end() //thunderceleirtn url (api) ko hit krega then we will get our emthod

// if(req.method==="GET"){
//     res.write("<h1>GET MEthod</h1>")
// res.end()
// }

// if(req.method==="POST"){
//     res.write("<h1>POST MEthod</h1>")
// res.end()
// }

// if(req.method==="PUT"){
//     res.write("<h1>PUT MEthod</h1>")
// res.end()
// }

// if(req.method==="DELETE"){
//     res.write("<h1>DELETE MEthod</h1>")
// res.end()
// }

//GET http://localhost:3000/user is deferent from POST http://localhost:3000/user....becoz method is different
//ques: agr method get h or url user h toh msg aana chaiye data reterievd and agr method post and url uiser h toh msga aan chaiye daat created
// if(req.url==="/user" && req.method==="GET"){
//     res.write("<h1>data retrieved</h1>")
//     res.end()
// }
// if(req.url==="/user" && req.method==="POST"){
//     res.write("<h1>data created</h1>")
//     res.end()
// }


//HEADERS: extra infromation in form of json...extra info aati h frontend se and then stored in headers
// console.log(req.headers)  //terminal mi dekhne ko milaega kyoki console.log use kiya hua 
// res.end()  //headers mi ja kr we can also add our info by making our key value apirs

// console.log(req.headers.host)  //pura header print na krva k jsut specific things
// console.log(req.headers.token) 
// res.end() 
//headers mi extra info hoti h primary info nhi...eg: of primary info user anme, email password ...extra info is json mi handle kro ...token ye h 

//now lets see how to handle primary info
//data 1 baar mi nhi aat chunks mia aata h in http..so let see how to ahndle that chunks vaala data...jes se server pr load na aaye

//on thunder client type in body box in fromat = "text" then this code then the body ka content will appear in termianl as we r using consoless chunk chunk mi add ho kr k pura data mil jaaega ahm ko data variable mi
//})  //ess fxn ka listner data hoga with callback"chunk"

req.on("end", ()=>{  //es fxn mi data end ho jaaega with callback to print the data...eska lisetner h end
    console.log(data)
    res.end()  //send krte tym in thunderclient method post krlena becoz get k pass body nhi hoti
})


})  
server.listen(3000,()=>{     // server.listen(3000) server ki request krega on port no 3000
    console.log("server is running on port no 3000") 

})
//http://localhost:3000/ search this it will show hello world

//api test use postman and thunderclient
