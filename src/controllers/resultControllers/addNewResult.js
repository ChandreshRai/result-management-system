const { createResult } = require("../../services/result.service")



const addNewResult = async (req, res) => {

    try {

        const data = req.body
        data.createdBy = req.decoded.name

        const newResult = await createResult(data)


        res.json({
            "message":"result added successfully",
            "data": newResult
        })
    } catch (error) {
        console.log(error);
    }

}

module.exports = addNewResult