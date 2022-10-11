const express = require("express");
const { books } = require("../context/lib");
const router = express.Router();
const lib = require("../context/lib");

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const idx = books.findIndex((el) => el.id === id);

  res.render("view", {
    el: books[idx],
  });
});

module.exports = router;
