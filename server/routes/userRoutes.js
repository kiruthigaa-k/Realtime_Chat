const { register,login,setAvatar } = require("../controllers/usersController");

const router = require("express").Router();

router.post("/register",register);
router.post("/setAvatar/:id",setAvatar);
router.post("/login",login);
module.exports = router;