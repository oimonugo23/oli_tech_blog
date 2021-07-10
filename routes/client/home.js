const router = require("express").Router();
const homeCtr = require('../../controllers/client/home')


router.get("/", homeCtr.loadAllPosts);
router.get("/post/:id", homeCtr.loadSinglePost);
router.get("/login", homeCtr.renderLogin);
router.get("/signup", homeCtr.renderSignUp);

module.exports = router;
