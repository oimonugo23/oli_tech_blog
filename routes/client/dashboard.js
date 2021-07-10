const router = require("express").Router();
const dashboadCtr = require('../../controllers/client/dashboadCtr')
const auth = require("../../middlewares/auth");


router.get("/", auth, dashboadCtr.findAllPosts);

router.get("/new", auth, dashboadCtr.getNewPost);

router.get("/edit/:id", auth, dashboadCtr.editPostById);

module.exports = router;
