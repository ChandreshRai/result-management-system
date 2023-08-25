const bcrypt = require('bcrypt');
const saltRounds = 10; // Number of salt rounds for bcrypt

const generateHashedPassword=async(plainPassword)=>{
    try {
        const hash = await bcrypt.hash(plainPassword, saltRounds);
        return hash;
    } catch (error) {
        throw new Error('Password hashing failed');
    }
}


const compareHashedPassword=async(plainPassword,hashedPassword)=> {
    try {
        const result = await bcrypt.compare(plainPassword, hashedPassword);
        return result;
    } catch (error) {
        console.error('Password comparison error:', error);
        throw new Error('Password comparison failed');
    }
}

module.exports = {
    generateHashedPassword,
    compareHashedPassword
};