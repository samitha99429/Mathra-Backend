const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const branchSchema = new Schema({
  userID: { type: String, required: true },
  userName: { type: String, required: true },
  userPassword: { type: String, default: '12345' },
  userEmail: { type: String, required: true },

});

const BranchModel = mongoose.model('BranchModel', branchSchema);
module.exports = BranchModel;
