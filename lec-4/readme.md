1.when we break all the code in separate files is called module ...and each module is independent of other modules...
there are 3 types of module - core-built into Node.js , local-we create them into our project and 3rd party- cretaed by other organisations and we install them using npm
CORE - vo modules jo ki node js mi inbuilt hote hn ...eg:os,fs,crypto,dns,url,path,http
LOCAL - vo modules jo ham create krte hn as a developer in our project eg:Import with relative path: require('./myModule')
3rd party - installed via npm from the npm registry ...eg: express, nodemon

npm init -y : package.json bn jaaegi

IN PACKAGE.JSON ..."start": "node index.js"...ess se npm start se hi chl jaaega ..file ka name dene ki need nhi hogi(index.js)

2 ways to import and export:
old module.export ={x,y} -- common js method...in package.json // "type": "commonjs"
new...export default vala method called ES module ...but here we write // "type": "module" in package.json..hr fxn k aaghe export likh dena 

steps to convert commonjs into es module:
1.change the type from "commonjs" to "module" in package.json
2.then change the module.exports ={add,sub} into export infron  t of all the fucntions
3.then in import change const x = require("./math) into import{add,sub} from "./math.js" ...puri file ka naam likhna h edhr

-->CORE MODULES..no npm installation required
-> import with const module = require('module-name')   eg: const fs = require("fs")

MODULE NAME                MODULE USECASE
os                         operating system info
fs                         file system read/write/delete operations
path                       file path manipulation utilites
dns                        domain name resolution
http                       create https servers and clients
cryto                      convert passwords into hash
