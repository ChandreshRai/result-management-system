const { compareHashedPassword } = require("../../helpers/bCrypt");
const { generateToken } = require("../../helpers/jwt");
const {getTeacher} = require("../../services/teacher.service");

const teacherLogin = async(req, res)=>{

    try {

        const condition = {
            email:req.body.email,
        }



        const result = await getTeacher(condition);

        if(result){

            const isPasswordMatched = await compareHashedPassword(req.body.password, result.password)

            if(isPasswordMatched){


                const token = await generateToken({
                    email:result.email,
                    name:result.name
                    
                },'1h')

                const { password, ...userWithoutPassword } = result;

                res.json({
                    "message":"user Logged in succesfully",
                    "user":userWithoutPassword,
                    "Token":token
                })
            }
            else{
                res.json({
                    "message":"password or username incorrect",
                })
            }
        }else{
            res.json({
                "message":"password or username incorrect",
            })
        }
    } catch (error) {
        console.log(error);
    }

}

module.exports=teacherLogin