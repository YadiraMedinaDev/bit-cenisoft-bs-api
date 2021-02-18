const mongoose = require("mongoose");

const Detail = mongoose.model("details", {
  idBook: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "books",
    required: true,
  },
  nameBook: String,
  unitValue: Number,
  amount: Number,
});

module.exports = Detail;
