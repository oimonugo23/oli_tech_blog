const router = require("express").Router();
const userCtr = require("../../controllers/api/userCtr")

router.post("/", userCtr.addUser);
router.post("/login", userCtr.loginUser);
router.post('/logout', userCtr.logoutUser);
router.delete("/user/:id", userCtr.deleteUser);

module.exports = router;
