const mongoose = require('mongoose');
const mongooseUniqueValidator = require('mongoose-unique-validator');

const profileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  avatar: { type: String },
  bio: { type: String },
  company: { type: String },
  website: { type: String },
  skills: { type: [String], required: true },
  social: {
    youtube: { type: String },
    twitter: { type: String },
    facebook: { type: String },
    linkedin: { type: String },
    instagram: { type: String },
  },
  createdDate: { type: Date, default: Date.now },
  experience: [
    {
      title: { type: String, required: true },
      company: { type: String, required: true },
      location: { type: String },
      fromDate: { type: String, required: true },
      toDate: { type: String },
      current: { type: Boolean, default: false },
      description: { type: String },
    },
  ],
  education: [
    {
      school: { type: String, required: true },
      degree: { type: String, required: true },
      fieldofstudy: { type: String, required: true },
      fromDate: { type: String, required: true },
      toDate: { type: String },
      current: { type: Boolean, default: false },
      description: { type: String },
    },
  ],
});
profileSchema.plugin(mongooseUniqueValidator);
module.exports = mongoose.model('Profile', profileSchema);
