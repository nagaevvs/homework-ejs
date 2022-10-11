const express = require("express");
const router = express.Router();
const lib = require("../context/lib");

router.get("/", (req, res) => {
  res.render("create", {
    lib: lib.books,
  });
});

//создаем книги и возврашаем ее же вместе с присвоенным id
router.post("/", (req, res) => {
  const { books } = lib;
  const { title, description, authors } = req.body;
  const newBook = new Book(title, description, authors);
  books.push(newBook);
  res.redirect("/");
});

module.exports = router;
