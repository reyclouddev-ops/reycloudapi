const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

app.use(cors());

app.use(express.json());

app.use(morgan("dev"));

app.get("/", (req, res) => {

    res.json({

        success: true,

        name: "ReyCloudAPI",

        version: "1.0.0",

        status: "ONLINE"

    });

});

app.get("/api/ping", (req, res) => {

    res.json({

        success: true,

        message: "PONG!"

    });

});

module.exports = app;
