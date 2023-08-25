const { student } = require("../models/student.model");



const createResult = async (data) => {
    try {
        const result = await student.create(data)
        return result
    } catch (error) {
        console.log(error);
    }
}

const getAllResult = async (attributes) => {

    try {
        const result = student.findAll({
            attributes:attributes
        })
        return result
    } catch (error) {
        console.log(error);
    }
}

const getOneResult = async (condition, attributes) => {
    try {
        if(!attributes){
            const result = await student.findOne({
                where:condition
            })
            return result
        }else{
            const result = await student.findOne({
                where:condition,
                attributes:attributes
            })
            return result
        }

    } catch (error) {
        console.log(error);
    }
}



const updateOneResult = async (data, condition) => {

    try {
        const user = await student.update(
            data,
            { where: condition }
        )
        return user;
    } catch (error) {
        console.log(error);
    }
}

const deleteOneResult = async(condition)=>{
    try {
        const result = await student.destroy({
            where:condition
        })
        return result
    } catch (error) {
        console.log(error);
    }
}




module.exports = { createResult, getAllResult, updateOneResult, getOneResult,deleteOneResult }