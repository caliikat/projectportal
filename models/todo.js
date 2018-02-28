const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todoSchema = new Schema({
  queueTitle: { type: String, required: true },
  description: { type: String, required: true },
  dueDate: {type: String}
});

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
