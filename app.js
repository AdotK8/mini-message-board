const express = require("express");
const app = express();
const path = require("node:path");
const appRoutes = require("./routes/appRoutes");

const assetsPath = path.join(__dirname, "public");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static(assetsPath));

app.use("/", appRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`listening on port ${PORT}!`));
