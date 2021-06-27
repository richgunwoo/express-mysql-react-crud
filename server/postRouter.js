const router = require('express').Router();
const controller = require("./postController");

router.get("/", controller.getPosts);
router.get("/:id", controller.getPost);
router.post("/", controller.createPost);
router.patch("/:id", controller.updatePost);
router.delete("/:id", controller.deletePost);
router.patch("/:id/likePost", controller.likePost);

module.exports = router;