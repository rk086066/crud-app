import mongoose from "mongoose";

const personSchema = mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Age: {
    type: Number,
  },
  Gender: {
    type: String,
  },
  Mobile_number: {
    type: Number,
  },
  id: {
    type: String,
    required: true,
  },
});

const person = mongoose.model("person", personSchema);

export default person;
