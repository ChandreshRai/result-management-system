const { Router } = require("express");
const teacherLogin = require("../controllers/techerControllers/login");
const addTeacher = require("../controllers/techerControllers/addTeacher");
const { verifyToken } = require("../helpers/jwt");
const addNewResult = require("../controllers/resultControllers/addNewResult");
const getAllStudentResult = require("../controllers/resultControllers/getResult");
const updateResult = require("../controllers/resultControllers/editResult");
const deleteResult = require("../controllers/resultControllers/deleteResult.controller");


const router = Router();

router.post('/teacher-login',teacherLogin);
router.post('/add-teacher',addTeacher)
router.post('/add-new-result',verifyToken, addNewResult)
router.get('/get-all-result', getAllStudentResult)
router.put('/edit-result',verifyToken,updateResult)
router.delete('/delete-result', deleteResult)

module.exports=router