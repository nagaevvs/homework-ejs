const express = require("express");
const router = express.Router();
const lib = require("../context/lib");
router.get("/", (req, res) => {
  const { url } = req;
  // res.json({ url });
  res.render("create", {
    lib: lib.books,
  });
});

module.exports = router;
