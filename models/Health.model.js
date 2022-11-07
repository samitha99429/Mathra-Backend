const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const reportSchema = new Schema({
  reportID: { type: String, required: true },
  reportDescription: { type: String, required: true },
});

const ReportModel = mongoose.model('ReportModel', reportSchema);
module.exports = ReportModel;
