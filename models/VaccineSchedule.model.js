const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const vaccineScheduleSchema = new Schema({
  vaccineID: { type: String, required: true },
  vaccineName: { type: String, required: true },
  vaccineDate: { type: String, required: true },
  vaccineTime: { type: String, required: true },
});

const VaccineScheduleModel = mongoose.model(
  'VaccineModel',
  vaccineScheduleSchema
);
module.exports = VaccineScheduleModel;
