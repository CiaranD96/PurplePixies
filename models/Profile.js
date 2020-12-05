const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  skills: {
    type: [String],
    required: true,
  },
  bio: {
    type: String,
  },
  character: [
    {
      Name: {
        type: String,
        required: true,
      },
      Race: {
        type: String,
        required: true,
      },
      Class: {
        type: String,
        required: true,
      },
      Level: {
        type: String,
        required: true,
      },
      Realm: {
        type: String,
        required: true,
      },
      Region: {
        type: String,
        default: 'eu',
      },
      MainSpec: {
        type: String,
        required: true,
      },
      OffSpec: {
        type: String,
      },
    },
  ],
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);
