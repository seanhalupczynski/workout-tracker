var db = require("../models");

module.exports = function(app){
    app.get("/api/workouts/", (req, res) => {
        db.Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout)
        })
        .catch( err =>{
            res.json(err);
        });
    });

    app.post("/api/workouts/", (req, res) => {
        db.Workout.insertOne(req.body)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err)
        });
    });

    app.post("/api/workouts/:id", (req, res) => {
        db.Workout.insertOne(req.body)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err)
        });
    });

}