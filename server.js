// DOTENV CONFIG
import { config } from "dotenv";
config();

// IMPORTS
import express from "express";
import path from "path";

// ROUTE IMPORTS
import homeRoutes from "./routes/home.js";
import moment from "moment";
// VARIABLES
const app = express();
const PORT = process.env.PORT || 3000;


// CONFIGURATION
app.set("view engine", "ejs").set("views", path.join(path.resolve(), "views"));

// MIDDLEWARES
app
  .use(express.urlencoded({ extended: true }))
  .use(express.json())
  .use(express.static(path.join(path.resolve(), "public")));

// ROUTES DEFINITION
app.use("/", homeRoutes);
app.listen(PORT, () => {
  console.log(`SERVER RUNNING AT PORT ${PORT}`);
});
