1.when we break all the code in separate file is called module ...and each module is independent of other modules...
there are 3 types of module - core , local and 3rd party
CORE - vo modules jo ki node js mi inbuilt hote hn ...eg:os
LOCAL - vo modules jo ham create krte hn as a developer
3rd party - jo ham bhar se import krte hn ...eg: express, nodemon

npm init --y : package.json bn jaaegi

"start": "node index.js"...ess se npm start se hi chl jaaega ..file ka name dene ki need nhi hogi(index.js)

2 atreke to import and export:
old module.export ={x,y} -- common js method...in package.js // "type": "commonjs"
new...export default vala method called ES module ...but here we write // "type": "module" in package.js..hr fxn k aaghe export likh dena 

steps to convet commonjs into es module:
1.change the type in package.json
2.then change the module.exports ={add,sub} into export infort of all the fucntions
3.then in import change const x = require("./math) into import{add,sub} from "./math.js" ...puri file ka naam likhna h edhr