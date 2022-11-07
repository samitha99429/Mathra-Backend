const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const vaccineSchema = new Schema({
  vaccineID: { type: String, required: true },
  vaccineName: { type: String, required: true },
  vaccineDate: { type: String, required: true },
  vaccineTime: { type: String, required: true },
});

const VaccineModel = mongoose.model('VaccineModel', vaccineSchema);
module.exports = VaccineModel;
