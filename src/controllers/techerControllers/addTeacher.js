const { generateHashedPassword } = require("../../helpers/bCrypt")
const { createTeacher } = require("../../services/teacher.service")

const addTeacher = async (req, res) => {

    try {
        const data = {
            "email": "test2@gmail.com",
            "password": "abc123",
            "name": "test2"
        }

        const hashPass = await generateHashedPassword(data.password)
        data.password = hashPass

        const result = await createTeacher(data)

        res.json({
            "message": "teacher created successfully",
            "Teacher": result
        })
    } catch (error) {
        console.log(error);
    }
}
module.exports=addTeacher