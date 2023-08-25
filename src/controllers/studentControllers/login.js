const { getOneResult } = require("../../services/result.service")


const studentLogin = async (req, res) => {

    try {
        const attributes = ['rollNo', 'name', 'dob', 'score']
        const result = await getOneResult({rollNo:req.body.rollNo}, attributes)
        if (result) {
            if (result.dob = req.body.rollNo) {
                res.json({
                    "message": "Student logged in successfully",
                    "result": result
                })
            } else {
                res.json({
                    "message": "rollNo or dob is incorrect",
                })
            }
        } else {
            res.json({
                "message": "rollNo or dob is incorrect",
            })
        }
    } catch (error) {
        console.log(error);
    }
}

module.exports=studentLogin