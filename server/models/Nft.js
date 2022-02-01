const { Schema, model } = require('mongoose');
const commentSchema = require('./Comment');
const dateFormat = require('../utils/dateFormat');

const nftSchema = new Schema(
  {
    nftName: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
    },
    url: {
      type: String,
      required: true,
      unique: true
    },
    likes: {
      type: Number,
      required: true
    },
    comments: [commentSchema]
  },
  {
    toJSON: {
      getters: true
    }
  }
);

thoughtSchema.virtual('commentCount').get(function() {
  return this.comments.length;
});

const Nft = model('Nft', nftSchema);

module.exports = Nft;
