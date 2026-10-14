//creating data manually
let notes = [
    {
        id:1,
        title: "Web Dev iii",
        description: "this is a web dev 3 note",
        note: "index.js",
        link:"",
        createdOn: "02-09-2026",
        author : "Jack sparrow"
    },

    {
        id:2,
        title: "OS",
        description: "this is OS note",
        note: "index.js",
        link:"",
        createdOn: "03-09-2026",
        author : "xyz"
    },

    {
        id:3,
        title: "DBMS",
        description: "this is a DBMS note",
        note: "index.js",
        link:"",
        createdOn: "04-09-2026",
        author : "abc"
    },
    
    {
        id:4,
        title: "CN",
        description: "this is a CN note",
        note: "index.js",
        link:"",
        createdOn: "02-09-2026",
        author : "Jacky"
    }


]
//now we will export this note fxn to use in other file
module.exports = {notes}

//flow of these folders
// models ----> controllers ----> routes ---> index.js
//request kaise aati h:
//index.js ---> routes ---> controllers ---> models ...then return models to controllers to routes