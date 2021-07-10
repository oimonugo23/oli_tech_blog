const { Post } = require("../../models");

exports.addPost = (req, res) => {
  console.log(req.body)
  Post.create({ ...req.body, userId: req.session.userId })
    .then(newPost => {
      res.json(newPost);
    })
    .catch(err => {
      res.status(500).json(err);
    });
};

exports.updatePost = (req, res) => {
  Post.update(req.body, {
    where: {
      id: req.params.id
    }
  })
    .then(affectedRows => {
      if (affectedRows > 0) {
        res.status(200).end();
      } else {
        res.status(404).end();
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
};

exports.deletePost = (req, res) => {
  Post.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(affectedRows => {
      if (affectedRows > 0) {
        res.status(200).end();
      } else {
        res.status(404).end();
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
};