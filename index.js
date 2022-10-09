const express = require("express");

const logger = require("./middleware/logger");
const error404 = require("./middleware/err-404");
const indexRouter = require("./routes/index");
const demoRouter = require("./routes/demo");
const booksRouter = require("./routes/api/books");
const userRouter = require("./routes/api/user");

const app = express();
app.use(express.json());

app.use(logger);
//app.use(error404);
app.use("/", indexRouter);
app.use("/demo", demoRouter);
app.use("/api/books", booksRouter);
app.use("/api/user", userRouter);
app.use("/public", express.static(`${__dirname}/public`));

const PORT = process.env.PORT || 3000;
app.listen(PORT);
