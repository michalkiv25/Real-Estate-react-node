const Joi = require('@hapi/joi');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const config = require('config');


// Checking legality against the database
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 255
  },
  last: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 255
  },
  email: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 255,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 1024
  },
  biz: {
    type: Boolean,
    required: true
  },
  createdAt: { type: Date, default: Date.now },
  cards: Array //An array of multiple cards
});

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id, biz: this.biz }, config.get('jwtKey'));
  return token;
}

const User = mongoose.model('User', userSchema);

// Validation test user from Joi
function validateUser(user) {
  const schema = Joi.object({
    name: Joi.string().min(2).max(255).required(),
    last: Joi.string().min(2).max(255).required(),
    email: Joi.string().min(6).max(255).required().email(),
    password: Joi.string().min(6).max(1024).required(),
    biz: Joi.boolean().required()
  });

  return schema.validate(user);
}
// Validation for the list of preferred cards you select
function validateCards(data) {
  const schema = Joi.object({
    cards: Joi.array().min(1).required()
  });

  return schema.validate(data);
}

exports.User = User;
exports.validate = validateUser;
exports.validateCards = validateCards;