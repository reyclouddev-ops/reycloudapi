const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const Response = require("./utils/response");
const authRoutes = require("./routes/auth");

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/api", authRoutes);

app.get("/", (req, res) => {

    Response.success(res, "ReyCloudAPI Online", {

        name: process.env.APP_NAME,

        version: process.env.APP_VERSION

    });

});

app.get("/api/ping", (req, res) => {

    Response.success(res, "PONG!");

});

module.exports = app;
