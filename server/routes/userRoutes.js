const { register,login,setAvatar,getAllUsers } = require("../controllers/usersController");

const router = require("express").Router();

router.post("/register",register);
router.post("/setavatar/:id",setAvatar);
router.post("/login",login);
router.get("/allusers/:id",getAllUsers);
module.exports = router;