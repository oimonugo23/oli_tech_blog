const { Post } = require("../../models");
const auth = require("../../middlewares/auth");

exports.findAllPosts = (auth, (req, res) => {
  Post.findAll({
    where: {
      userId: req.session.userId
    }
  })
    .then(dbPostData => {
      const posts = dbPostData.map((post) => post.get({ plain: true }));
      console.log("POSTSSSS: ", posts)
      res.render("all-posts-admin", {
        layout: "dashboard",
        posts
      });
    })
    .catch(err => {
      console.log(err);
      res.redirect("login");
    });
});

exports.getNewPost = (auth, (req, res) => {
  res.render("new-post", {
    layout: "dashboard"
  });
});

exports.editPostById = ("/edit/:id", auth, (req, res) => {
  Post.findByPk(req.params.id)
    .then(dbPostData => {
      if (dbPostData) {
        const post = dbPostData.get({ plain: true });

        res.render("edit-post", {
          layout: "dashboard",
          post
        });
      } else {
        res.status(404).end();
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
});
