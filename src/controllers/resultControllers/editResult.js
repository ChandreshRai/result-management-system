const { getOneResult, updateOneResult } = require("../../services/result.service")


const updateResult = async(req, res)=>{

    try {


        const result=await getOneResult({rollNo:req.body.rollNo})
        

        if(result){
            data = req.body,
            data.edditedBy = req.decoded.name
            condition={
                rollNo:req.body.rollNo
            }
            await updateOneResult(data, condition)
            
            res.json({
                "message":"result updated successfully"
            })
        }else{
            res.json({
                "message":"result with given rollNo. not found"
            })
        }
       
        
        
    } catch (error) {
        
    }


}

module.exports=updateResult