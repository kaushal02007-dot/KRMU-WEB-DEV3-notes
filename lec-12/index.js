//MVC architecture  where m : model v: views c:controller
//large code ko 1 file mi nhi kr skte toh here we will make folders and then we will differentiate them

//in "models" folder we have all the files releated to database schema
//in "controllers": Controllers contain the main backend logic and handle requests coming from routes.  
//  all the logics jo index.js mi krte the vo edhr store krenhge fxns bna kr ..(res.status, res.body ect etc) 
//views folder mi jitni b ui related files hoti hn vo hungi esko bolte h server side rendering (xyz.html vagera file)...server serve kr rha h ui files

//in routes folder : we will make all the files required for routing...ex:students k leye bns li studentRoutes.js(/api/user/student/) and( /api/user/student) then agr student koi b query krega ya request krega toh ye ess ko hi check krega other files ko nhi 
//aise hi bna leye teacherRoutes.js(will contain api/teacher) toh jb teacher koi query krega toh vo specificalyy teacherRoutes.js file ko check krlega 
//config: kisi b 3rd party ko ya ai ko connect krte hn apne folder se toh jo connection vaali file h vo hamesha config mi aaegi uss fiel ko config mi likhenge

//middleware: is a function bw request and final response(actual fxn) ...request jaaegi toh phele aaega middleware for security purpose or security check/authenticaton then response run krta h 
//actual fxn k run krne se phele middelware chlega ye vaali file
// request ----> MIDDLEWARE ------> response(fxn)
//      <------ response directly aaajaega  <------  (middleware se nhi hoke jaaega)


//3 types of middlewares : custom middleware: we design them like we make middleware folder then we make isAuhtorized.js file inside it and put code
// , built-in Middleware :phele hi bne hote hn eg: express.json(), express.urlencoded()
//  and 3rd party: morgan, cors, cookie-parser


//LEC 13,14,15
//project name- i notebook
