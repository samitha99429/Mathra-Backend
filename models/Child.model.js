const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const childSchema = new Schema({
  childID: { type: String, required: true },
  childName: { type: String, required: true },
  parentName: { type: String, required: true },
  address: { type: String, required: true },
  dateOfBirth: { type: String, required: true },
  bloodGroup: { type: String, required: true },
});

const ChildModel = mongoose.model('ChildModel', childSchema);
module.exports = ChildModel;
