const { student } = require("../models/student.model");
const { teacher } = require("../models/teacher.model")


const getTeacher = async (condition) => {
    try {

        const result = await teacher.findOne({
            where:condition
        })
        if (result) {
            
            return result.toJSON()
        }
        return false
}
catch(error){
    console.log(error);
}
}

const createTeacher = async (data)=>{
    try {
        
        console.log('in create teacher');
        const newTeacher = await teacher.create(data);
        console.log(newTeacher);
        return newTeacher.toJSON();
    } catch (error) {
        console.log(error);
    }
}






module.exports={getTeacher,createTeacher}