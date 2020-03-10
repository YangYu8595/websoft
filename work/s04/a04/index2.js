"use strict"
const port = process.env.DBWEBB_PORT || 1337;
const express = require("express");
const app = express();
const routeIndex = require("./route/index.js");
const middleware = require("./middleware/index.js");
/*
app.use((req,res,next) => {
    console.info(`Got request on ${req.path} (${req.method}).`);
    next();
});
*/
app.use(middleware.logIncomingToConsole);
app.use("/",routeIndex);
// Add a route for the path /
app.get("/", (req, res) => {
    res.send("Hello World");
});

// Add a route for the path /about
// app.get("/about", (req, res) => {
//     res.send("About something");
// });

// Start up server and begin listen to requests
/*
app.listen(port, () => {
    console.info(`Server is listening on port ${port}.`);

    // Show which routes are supported
    console.info("Available routes are:");
    app._router.stack.forEach((r) => {
        if (r.route && r.route.path) {
            console.info(r.route.path);
        }
    });
});*/
app.listen(port,logStartUpDetailsToConsole);
/**
	 * Log app details to console when starting up.
	 *  *
	 *   * @return {void}
	 *    */

function logStartUpDetailsToConsole() {
    let routes = [];

    // Find what routes are supported
    app._router.stack.forEach((middleware) => {
        if (middleware.route){
            // Routes registered directly on the app
            routes.push(middleware.route);
        } else if(middleware.name === "router") {
            // Routes added as router middleware
            middleware.handle.stack.forEach((handler) => {
                let route;

                route = handler.route;
                route && routes.push(route);
            });
        }
    });

    console.info(`Server is listening on port ${port}.`);
    console.info("Available routes are:");
    console.info(routes);
}
