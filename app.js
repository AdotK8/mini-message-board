const express = require("express");
const app = express();
const path = require("node:path");
const appRoutes = require("./routes/appRoutes");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use("/", appRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`listening on port ${PORT}!`));
