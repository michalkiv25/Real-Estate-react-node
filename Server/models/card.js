const Joi = require('@hapi/joi');
const mongoose = require('mongoose');
const _ = require('lodash');

const cardSchema = new mongoose.Schema({
  bizName: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 255
  },
  bizPhone: {
    type: String,
    required: true,
    minlength: 9,
    maxlength: 10
  },
  bizAddress: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 400
  },
  bizPrice: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 15
  },
  bizDescription: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 1024
  },
  bizImage: {
    type: String,
    required: false,
    maxlength: 2000
  },
  bizNumber: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 99999999999,
    unique: true
  },
  // Each card has the id object of the person who wrote it and it is taken from a user file
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

const Card = mongoose.model('Card', cardSchema);

// Validation of what is written on the card
function validateCard(card) {

  const schema = Joi.object({
    bizName: Joi.string().min(2).max(255).required(),
    bizPhone: Joi.string().min(9).max(10).required().regex(/^0[2-9]\d{7,8}$/),
    bizAddress: Joi.string().min(2).max(400).required(),
    bizPrice:Joi.string().min(2).max(400).required(),
    bizDescription: Joi.string().min(2).max(1024).required(),
    bizImage: Joi.string().max(1024)
  });

  return schema.validate(card);
}

// Creating a card number by the function
// The loop is endless until you find a number that does not appear in the database
async function generateBizNumber(Card) {
  while (true) {
    let randomNumber = _.random(1000, 999999);
    let card = await Card.findOne({ bizNumber: randomNumber });
    if (!card) return String(randomNumber);
  }

}

exports.Card = Card;
exports.validateCard = validateCard;
exports.generateBizNumber = generateBizNumber;