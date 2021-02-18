const mongoose = require("mongoose");

const Sale = mongoose.model("sales", {
  date: Date,
  total: Number,
  idClient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "clients",
    required: true,
  },
});

module.exports = Sale;
