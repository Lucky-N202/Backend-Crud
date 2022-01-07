module.exports = app => {
    const tutorials = require("../controllers/tutorial.controller.js");

    var router = require("express").Router();

    //Create a new tutorial.
    app.post("/create", tutorials.create);

    //Retrieve all tutorials.
    app.get("/all", tutorials.findAll);

    //Retrieve all published tutorials.
    app.get("/published", tutorials.findAllPublished);

    //Retrieve a single tutorial with id.
    app.get("/retrieve/:id", tutorials.findOne);

    //Delete a tutorial with id.
    app.delete("/delete/:id", tutorials.delete);

    //Delete all tutorials.
    app.delete("/delete/all", tutorials.deleteAll);

    //Update a tutorial with id.
    app.put("/update/:id", tutorials.update);

    app.use("/api/tutorials", router);
}