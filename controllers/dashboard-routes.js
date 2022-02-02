const router = require("express").Router();
const { Post, User } = require("../models");
const withAuth = require("../utils/auth");

// get all posts FROM SPECIFIC USER THATS LOGGED IN
// must be logged in to see and click on this

router.get("/", async (req, res) => {
  try {
    // Get all posts from specific user
    const postData = await Post.findAll({
      where: {
        userId: req.session.uderID,
      },
    });

    // Serialize data so the template can read it
    const posts = postData.map((post) => post.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render("all-posts-user", {
      layout: "dashboard",
      posts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// add new post
router.get("/new", async (req, res) => {
  res.render("new-post", {
    layout: "dashboard",
  });
});

// get single post?
router.get("/post/:id", async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["name"],
        },
      ],
    });

    const post = postData.get({ plain: true });

    res.render("edit-post", {
      ...post,
      layout: "dashboard",
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.redirect("login");
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect("/profile");
    return;
  }

  res.render("login");
});

module.exports = router;
