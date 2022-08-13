const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

//  reaction schema to be used in thought schema
const ReactionSchema = new Schema({
    reactionId:{
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
    },
    reactionBody: {
        type: String,
        required: true,
        trim: true,
        maxlength: [280, 'Please type a maximum of 280 characters!']
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => dateFormat(createdAtVal)
    }
},
{
    toJSON: {
        getters: true
    }
});

module.exports = ReactionSchema;