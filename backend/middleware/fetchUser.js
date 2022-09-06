const jwt  =  require('jsonwebtoken')
const secretkey = "Thisismyjsonwebtokensecretkeytouse";   


const fetchuser = (req,res,next)=>{
    //Get the user from the jwt token and add id to the req object
    const token  = req.header('auth-token')
    if(!token){
        res.status(401).send('Error: Please authenticate using a valid token')
    }
    try{
        const data = jwt.verify(token,secretkey);
        req.user =  data;
        next();
    }
    catch(err){
        res.status(401).send('Error: Please authenticate using a valid token')
    }
 
}

module.exports = fetchuser;
