module.exports = app => {
    const tutorials = require("../controllers/tutorial.controller.js");

    var router = require("express").Router();

    app.use("/api/tutorials", router);

    //Create a new tutorial.
    router.post("/create", tutorials.create);

    //Retrieve all tutorials.
    router.get("/retrieve/all", tutorials.findAll);

    //Retrieve all published tutorials.
    router.get("/published", tutorials.findAllPublished);

    //Retrieve a single tutorial with id.
    router.get("/retrieve/:id", tutorials.findOne);

    //Delete a tutorial with id.
    router.delete("/delete/:id", tutorials.delete);

    //Delete all tutorials.
    router.delete("/delete/all", tutorials.deleteAll);

    //Update a tutorial with id.
    router.put("/update/:id", tutorials.update);
}