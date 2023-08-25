const { Router } = require("express");
const studentLogin = require("../controllers/studentControllers/login");

const router = Router();


router.post('/login',studentLogin)


module.exports=router