module.exports = (req,res,next) => {
  if(req.userData.role == "admin"){
    next()
  }else{
    return res.status(400).json({
       message:"unauthorized user"
    })
  }
}