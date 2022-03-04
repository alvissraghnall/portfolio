const router = require('express').Router();
const path = require('path');


router.get("", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/index.html"));
});

router.get("/j", function (req, res) {
  res.send("j")
})

router.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/views/about.html"));
})

router.get("/articles", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/views/articles.html"));
})

router.get("/projects", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/views/projects.html"));
});

router.get("/contact-me", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/views/contact-me.html"));
});

module.exports = router;