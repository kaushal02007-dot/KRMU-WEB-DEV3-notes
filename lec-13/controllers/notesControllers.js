// notes se rela ted saare fxns edhr likhe jaenge ...means the whole crud operation edhr aaega
const {notes} = require("../models/data")


//GET: noteRoutes.js mi router.get use krenge
//reteriving the notes...................................................
const getNotes = (req,res)=>{
    //res.status(200).send(notes)  //jb ye request hit hogi toh frontend pr notes bhjenge mtlb thunderclient pr jb ess getNotes ki api daal kr send krenge

    //try catch mi likho uupr vaali line ko
     try{
        res.status(200).send(notes)
    
     } catch(err){
        console.log(err, "notes nhi  mil paaenge")
        res.status(500).send(err)
     }

}
// now fxn toh likh gya bu teska api esko hit krne se ye data frontend pr aaega ...toh uske leye jaao notesRoutes.js mi


//......................................................
//to reterive a particular note instead of all the notes...we will do it using id
const getNoteById = (req,res)=>{ 
    let {id} = req.params //req.paarms se ham dynamic url mi id get kr rhye hn
//to find that particular note form data.js
//we can use find or filter ...diff in find and filter: if for any arry we use filter if we ahve two 1 in array then filter will return index of those 2 1s but find will return index of first 1
    let element = notes.find(note => note.id === Number(id))  //note is an itreater ...ye data.js mi jaak hr id k pass jak id match krega match kr jaegi toh uss id vaale content ko lekr return ho jaeg
    //note ki jigh kuch b likh skte hn   Number(id)-- ye id client hamko send kr rha h vo id h(req.params se li h) and note.id ...vo id h jo data.js mi h 
    //phir ham dodno ko macth krenge then it will return if match


    //agr element nhi  mila toh usko handle krne k leye
    if(!element){
        return res.status(404).send("Data Not found")
    }
    res.status(200).send(element)


}  // ess vaale fxn ko b try catch mi likh lena / likh skte ho



//............................................................
//POST: notesRouter.js mi router.post use krenge
//fxn for post 
const createNote = (req,res)=>{
    //destructuring the data that came from frontend (id,title,createon)
    let{id,title,description,link,author,createdon,note} = req.body   //destructure ka mtlb h let{eske andr jo b likha h usko 1 1 krk extract krna}
    
    let newData ={
        id:notes.length+1,    //  id: id, ...ist vaali id hamn ekhud ni likhi h abh jo value ahmne extract kri vo uske saamne likhenge but likha hua and extracted diono same hn toh kluch b nhi likhenge : k baad toh chlega 1 baar hi likh do
        title: title,  //id user ni kuch b random likh di toh sequence nhi rhega so in controller in place of id we will write notes.length+1
        description: description,
        link: link,
        note: note,
        createdOn : createdOn,
        author : author
    }
    notes.push(newData)
    res.status(201).send("note created successfully")  //201 - created ka status
}


//.................................................
//PUT : notesRouter.js mi router.put use krnege
//to update
const updateNote = (req,res)=>{
    let {id} = req.params
    const note =notes.find(note => note.id === Number(id))  //herer Number is used so that url se jo id aayi vo string k form mi aayi h toh usko integer bna ne k leye

    if(!note){
        return res.status(404).send("Data Not Found")
    }

    //agar note mil jaata h toh :
    Object.assign(note,req.body)  //why Object.assign: note k andrf bahut saare fields hn id , title,author,desriotion ect. but clietn ni / user ni saari fields ki jigh seraf 2 fields update krne ko bhji only tohhh uss particular note mi update hote hi just 2 fields rh jaengi title and description (overwrite hogya){ title:  ; description: ;}
    //object.assign krega... req.body mi jo b field aayi hn usko update krdega note k andr  and jo b baaki nhi aaya uskpo as it is rhne dega

    res.status(200).send("Notes Updated")
    //thunderclient pr jaak put method chooose kr url likh do update wala then body mi likh do jo chnage krna h then send
}


//......................................................
//To delete ; noteRoutes mi router
const deleteNote = (req,res)=>{
    //getting id from url
    let {id} = req.params
    // step 1:id k basis pr note ko find kra
    const note =notes.find(note => note.id === Number(id))

    if(!note){
        return res.status(404).send("Data Not Found")
    }
    // step2: now note k basis pr index value find krenge 
    let index = notes.indexOf(note)    //kisi element k basis pr agr index find krni hoti h toh nameofelement.indexOf4
    //we did these steps so that index find kr uss index value ko dlt kre sken
    notes.splice(index,1)   //index se vo find kra jo dlt krna h and 1 mtlb kitne dlt krne hn 2 likh denge toh uss index se se leker next 2 will be deleted
    res.status(200).send("DEleted successfully")


    

}
module.exports = {getNotes,getNoteById,createNote,updateNote,deleteNote} //import nhi rhnege toh ham usko routes mi use nhi rk paaenga
//edhr apne controller/fxn naam likh kr k routers mi jakr router banenge uss controller k letye