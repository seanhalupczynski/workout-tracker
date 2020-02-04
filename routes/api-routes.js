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
        db.Workout.create({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch((err) => {
            res.json(err)
        });
    });

    app.put("/api/workouts/:id", (req, res) => {
        db.Workout.findByIdAndUpdate(
            req.params.id,
            { $push: { exercises: req.body } },
            { new: true, runValidators: true }
        )
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err)
        });
    });

    app.get("/api/workouts/range", (req, res) => {
        db.Workout.find({}).sort({day: -1}).limit(7)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
    });

    app.delete("/api/workouts", (req, res) => {
        db.Workout.findByIdAndDelete(req.body.id)
        .then(() => {
            res.json(true);
        })
        .catch(err => {
            res.json(err);
        });
    });

}