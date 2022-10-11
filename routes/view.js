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

//удаляем книгу и возвращаем ответ: 'ok'
router.get("/:id/delete", (req, res) => {
  const { id } = req.params;
  const idx = books.findIndex((el) => el.id === id);
  if (idx !== -1) {
    books.splice(idx, 1);
    res.redirect(`/`);
  } else {
    res.status(404);
    res.json({ errcode: 404, errmsg: "Запись не найдена" });
  }
});

module.exports = router;
