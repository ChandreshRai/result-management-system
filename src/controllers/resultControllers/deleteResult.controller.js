const { deleteOneResult } = require("../../services/result.service");

const deleteResult = async(req,res)=>{

try {

   
    
    const result = await deleteOneResult({rollNo:req.query.rollNo})
    if (result==1) {
        
        res.json({
            "message":"result deleted successfully",
        })
    }else{
        res.json({
            "message":"result not found",
        })
    }
    
} catch (error) {
    console.log(error);
}
}

module.exports=deleteResult