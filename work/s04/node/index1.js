"use strict"
const port = process.env.DBWEBB_PORT || 1337;
const express = require("express");
const app = express();
app.use((req,res,next) => {
    console.info(`Got request on ${req.path} (${req.method}).`);
    next();
});

// Add a route for the path /
app.get("/", (req, res) => {
    res.send("Hello World");
});

// Add a route for the path /about
app.get("/about", (req, res) => {
    res.send("About something");
});

// Start up server and begin listen to requests
app.listen(port, () => {
    console.info(`Server is listening on port ${port}.`);

    // Show which routes are supported
    console.info("Available routes are:");
    app._router.stack.forEach((r) => {
        if (r.route && r.route.path) {
            console.info(r.route.path);
        }
    });
});
