const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    title: {
        type: String, 
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    channel: [{
        type: Schema.Types.ObjectId,
        ref: 'Channel',
    }],
    originalPrice: {
        type: Number,
        required: true
    },
    imgName: {
        type: String,
        default: '/public/images/placeholder.png'
    }
}, {
    timestamps: true
});

ItemSchema
    .virtual('url')
    .get(function () {
        return '/product/item/' + this._id;
    });

module.exports = mongoose.model('Item', ItemSchema);