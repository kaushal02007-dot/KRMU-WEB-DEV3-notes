// hamne express and nodemon download kiya then in package.json mi jak script mi jak likhna h "dev": "nodemon index.js"

const express = require("express")
const {getNotes, createNote,getNoteById, updateNote,deleteNote} = require("../controllers/notesControllers")
const {isAuthorized, isLoggedIn} = require("../middlewares/isAuthorized")

const router = express.Router()  //fxn of express.. now we do router.get etc instead of app.get etc that we were writting in index.js


//is auhtorized ki wjh se route hit hua h them isAuhthorized ni token check kiya if match kiya toh getNote fxn will run
router.get("/notes", isAuthorized,isLoggedIn, getNotes )   //method to reterive the data(router.get()) ..../notes = route , getnote = fucntion
     // router.get("/notes", (req,res)=>{    ye nhi krna kyuki already controller k fxn mi likh chuke hn toh fxn ka naam hi lilkhenge
router.get("/notes/:id",isAuthorized, isLoggedIn,getNoteById)  // /:id ka mtlb h ki dynamic h user apnse hiusab se de dega..in thunderclient write http://localhost:3000/api/notes/3
router.post("/notes",createNote)
router.put("/update-note/:id", updateNote)  // /update-note es url ko dynamic bna na h toh kaise bnaenge by adding /:id
router.delete("/delete-note/:id", deleteNote) // to delete we will use delete here  // if want to check ki delete hua ya mnhi toh  http://localhost:3000/notes
module.exports = router




