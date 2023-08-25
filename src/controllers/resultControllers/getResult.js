const { getAllResult } = require("../../services/result.service");


const getAllStudentResult = async (req, res) => {
    try {


        const attributes = ['rollNo','name','dob','score']
        const result = await getAllResult(attributes);


        res.json({
            "message": "Result fetched successfully",
            "Total Students":result.length,
            "result": result
        })



    } catch (error) {
        console.log(error);
    }
}

module.exports = getAllStudentResult