const express = require("express");
const router = express.Router();
const { books } = require("../context/lib");
router.get("/:id", (req, res) => {
  const { id } = req.params;
  const idx = books.findIndex((el) => el.id === id);

  res.render("update", {
    book: books[idx],
  });
});

module.exports = router;
