const router = require("express").Router();
const auth = require("../../middlewares/auth");
const postCtr = require('../../controllers/api/postCtr')

router.post("/", auth, postCtr.addPost);
router.put("/:id", auth, postCtr.updatePost);
router.delete("/:id", auth, postCtr.deletePost);

module.exports = router;
