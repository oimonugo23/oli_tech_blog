const router = require("express").Router();
const auth = require("../../middlewares/auth");
const commentCtr = require('../../controllers/api/commentCtr')

router.post("/", auth, commentCtr.addComment);

module.exports = router;
