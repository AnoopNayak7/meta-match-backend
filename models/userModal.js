const mongoose = require("mongoose");

const pointSchema = new mongoose.Schema({
    type: {
      type: String,
      enum: ["Point"],
      required: true,
    },
    coordinates: {
      type: [Number],
      required: true,
    },
  });

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter your name"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Please enter your email"],
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please enter your password"],
      trim: true,
    },
    profile_photo: {
      type: String,
      required: false,
    },
    pincode : {
        type: String,
        required: false, 
    },
    lastLocation: {
        type: pointSchema,
        default: {
          type: "Point",
          coordinates: [0, 0],
        },
        index: "2dsphere",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
