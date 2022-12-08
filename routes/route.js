import express from "express";
import { v4 as uuid4 } from "uuid";
import Person from "../database/models/person.js";

const route = express.Router();

//for get all data -> /person

route.get("/person", async (req, res) => {
  try {
    const per = await Person.find({});
    res.send(per);
  } catch (err) {
    console.log("error while getting all data ->", err);
  }
});

//for add a data -> /person

route.post("/person", async (req, res) => {
  const per = req.body;
  const newid = uuid4();
  const perwithid = { ...per, id: newid };

  try {
    const newPerson = new Person(perwithid);
    await newPerson.save();
    res.send("saved");
  } catch (err) {
    console.log("cannot add new person->", err);
  }
  console.log(`new user added with the name ${per.Name}`);
});

//for delete a data -> /person/id

route.delete("/person/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await Person.deleteOne({ id: id });
  } catch (err) {
    console.log("error while deleting ->", err);
  }

  res.send(id);
});

//for update a data -> /person/id

route.put("/person/:id", async (req, res) => {
  const { id } = req.params;

  const updateData = {
    Name: req.body.Name,
    Age: req.body.Age,
    Gender: req.body.Gender,
    Mobile_number: req.body.Mobile_number,
  };

  try {
    await Person.findOneAndUpdate(id, updateData);
    res.send("updated");
  } catch (err) {
    console.log(("error while updating->", err));
  }
});

export default route;
