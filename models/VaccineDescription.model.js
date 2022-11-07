const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const vaccineDescriptionSchema = new Schema({
  descriptionID: { type: String, required: true },
  vaccineName: { type: String, required: true },
  vaccineDetails: { type: String, required: true },
});

const VaccineDescriptionModel = mongoose.model(
  'VaccineDescriptionModel',
  vaccineDescriptionSchema
);
module.exports = VaccineDescriptionModel;
