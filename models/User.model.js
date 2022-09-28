const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  isActivated: {
    type: Boolean,
    required: false
  },
  roles: [
    {
      type: String,
      ref: 'Role',
    }
  ],
});

module.exports = model('User', UserSchema);
