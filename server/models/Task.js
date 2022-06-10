const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema(
  {
    desc: {
      type: String,
      required: true,
    },
    done: {
      type: Boolean,
      default: false,
    },
    username: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Task", TaskSchema);
