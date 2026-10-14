const isAuthorized = (req,res,next)=>{  //next:
    let token = req.headers.cookie   //cookie ham frontend se bhjenge jaise hi vo aajaega usko store kra lenge token mi
    
    if((!token) || token!=(123987)){   //phlee check hua ki token ki vaalue aayi b y anhi then || k bbad vaale se check ho rha ki agr token ki value123987 nhi h toh usko return kra dena h vhyi se
        return res.status(401).send("1:bro aap glt jigh ho")  //token ki value b honi chiaye and 123987 k bra br b honi chiaye vrn aretrun it
    }
    next()  //fxn to move to next middleware/ handler

}

//middleware chaining
const isLoggedIn = (req,res,next) =>{   //cookie ki value headrer mi daal k dekhnege if false hui toh aap glt jihg ho aaega and if we will not give cookie ki value toh b aap glt jighn ho aaega
    let login = true   //agr login hoga toh hi daata dega login hni hoga toh midlleware se hi request back ho jaegi 
    // if login  = false then hamara proint homk aaega 2: tu phir aagya

    if(!login){
        return res.status(401).send( "2:bro ye glt jigh h phir se")
    }
    next()
}
// cookie ki vaalue vaali headermi jak agr cookie ki value mactch hui toh nexk middleware chlega isLoggedIn so usme agr login ki value = true hogyi toh
// data.js ka content aajaega response mi

// agr cookie ki value macth nhi hui toh next pr middleware pr move nhi krega or aajaega print ho kr 1: glt jgh 

//agr cookie match hogya but login = false h toh likh kr k aaega 2: bhai phir se glt jigh h 

// toh basically chain chl rhyi h midlewares ki 
//router.get("/notes", isAuthorized,isLoggedIn, getNotes )  ...notes route se request hit hui ... isAuhtorized middleware chla ,,, the middlware chaining chlte hue isLOggedin middleware chla thennnnn data tk gya if dono middleware chle toh

module.exports = {isAuthorized,isLoggedIn}
//now go in routes
//add isAuhtorized in the api