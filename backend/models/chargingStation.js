const mongoose = require("mongoose");

const chargingStationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    lat: { type: Number, required: true },
    lng: { type: Number, required: true },
  },
  status: {
    type: String,
    enum: ["active", "inactive"],
    default: "active",
  },
  powerOutput: {
    type: Number,
    required: true,
  },
  connectionType: {
    type: String,
    required: true,
  },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
},{ timestamps: true });

module.exports = mongoose.model("chargingStation", chargingStationSchema);
