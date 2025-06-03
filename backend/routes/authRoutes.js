const express = require('express');
const router = express.Router();
const { loginUser, registerUser} = require('../controllers/userController');
const protect = require('../middlewares/authMiddlewares');



router.post('/register',registerUser);
router.post('/login',loginUser);

// router.post('/',protect,createStation);

module.exports = router;