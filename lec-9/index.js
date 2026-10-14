//LECTURE 9 & 10

//Express.js is a fast, lightweight and flexible web framework for node.js that help developers built web applications, apis and backend servers easily

// It provides many important features such as:
// Routing → Helps define different URLs like /login, /signup, /profile
// Middleware → Allows us to run functions between request and response
// Request & Response Handling → Makes it easy to access user data and send responses
// REST APIs → Helps create APIs for frontend and mobile applications
// Integration with Databases → Easily connects with databases like MongoDB or MySQL


//WE CAN CREATE SERVERS USING node.js HTTP module THEN WHY DO WE NEED express.js
//-------> node.js HTTP Module can already create servers but it requires more manual setup and extra code. As project grow larger handling routes, requests, responses and apis using only the http module become difficult and messy
//------->express.js simplifies backend development by reducing boilerplate code and providing built in features like middleware, routing and easier requests handling



const express = require("express")  //importing express package

const app = express()  //this express is the actual framework(server vagera edhr hi hoga) and its instance is app...jha jha use hoga express vha ham app ki through use kr skte hn
app.use(express.json()) 

// app.get("/",(req,res)=>{
//     return res.status(200).send("hello world")  //200 is staus code means it will inicate that request is fulfilled if 200 will come if 300 will come then redirect hogya h .... 
// .send = combination of send + end ...request send b hogyi or end b hogyi

// }) //toselect the method ...app.get or app.post etc...1st arugment hoga url k aageh add ho jaaega eg "/student" likha toh url hoga http://localhost:3000/student


//server kbhi bnd na ho or bar baar ctrl c na krna pde isleye install npm nodemon
//to start the server we will write npm nodemon index.js ....vrna node index.js se chl la h toh us se chla lo

//CRUD OPEARTIONS: create read update and delete
let students= ["alex","joy","sara"]  //get se read krenge ,post se create , put se update and delete se remove
//READ
app.get("/student",(req,res)=>{
    res.status(200).send(students)
})

//CREATE:
app.post("/student", (req,res)=>{  //thunder client pr b post meHod selected hona chaiye ye post jo yha h vo thunder client k post ko request krne k leye
      //data bhij jaega body mi type krk but get kaise krenge then push it in students ...toh jo data aaega vha se vo get hoga request.body
      //data coming form thunderclient is getting stored in req.body
    let data = req.body.name  //jis b name se bhjo ge vo likh doge edhr uska key ... eg: in bosy we have written "name" : "kaushal" so here i have used req.body.name
    students.push(data)
    res.status(200).send("student added successfull")  //to indicate the frontend that student is added 
})  //jb b ham data ko json k form mi post krenge to always write app.use(express.json()) this will parse(convert) json into javascript becoz express canno understand json automatically..otherwise it will how internal server error

//to update
app.put("/student/:index",(req,res)=>{   //konsa student hoga ye btaenge index se and here we will make dynamnic api not static api : k baad vala part hoga dynamic will chnage on the action of user

    //req.params : url ka data get krta h (get element from url if url is dynamic)
    let ind = req.params.index  //edhr index esley likh h kyoki url mi index h  //abh konsi cheej update krni h vo hogya ...ab kya aaega uski jigh aaega in next line vala code
    let data = req.body.name  // idex b and dat b dono frotnend se aaya h 

    students[ind] = data //students array mi ind index p jo b h usko data variable se jo name hame mila uss se replace krdo
    res.status(200).send("student updated successfully")  // now in thunder client change the name from body then choose get method and then in url write http;//localhost:3000/:1  can write 2 agr 2nd index ka chnage krna h toh it depends on you
    //then to get the data i mean to see the updated data choose get and update the url to http://localhost:3000/student (remove/:1)
})  

//delete
app.delete("/student/:index",(req,res)=>{  //  /: index se ham choose krenge konse student ko delete krna h 
    let ind = req.params.index
    students.splice(ind,1) //ind = jo b index h vo ..1 = kitne elemenst delete krna h ...using splice becoz hame specific index pr element delete krna h 
    res.status(200).send("deleted")
})
app.listen(3000,()=>{
    console.log("server is running on port: 3000")
})

//REQUEST OBJECT 
// Whenever a client sends a request to an Express server, Express automatically creates a Request Object (req). This object contains all the information related to the incoming request.
// Using the req object, we can access details such as:
// URL → The requested route (/students)
// Method → Request type (GET, POST, PUT, DELETE)
// Body Data → Data sent by the client
// Query Parameters → Data passed in the URL query string
// Route Parameters → Dynamic values in the URL
// Headers → Additional request information


//req.query : to get the value of query in url
//query: r used to provide extra information to the server without changing the route ...Query Parameters are values sent in the URL after the ? symbol
//why we use query : taaki ham backend mi find kr paen ki hame kya chaiye ...url mi question mark k baad jo b hoga vo query mi count hoga ...and vo & see separate hoti h it means xxx&yyy&zz so here r 3 queries

//res.send - jb clear nhi hota ki data json mi h toh res.send se send krte hn
//res.json : jb sure h ki json mi data h or vo send krna h 
//res.status - to send the state of format   
//req.body:The req.body property is used to receive data sent by the client in the request body. It is commonly used when creating, updating, or modifying data on the server.
//req.header: header contains extra info related to the request ...like token ,cookie   req.header.cookie , req.header.token
