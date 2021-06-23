const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemInstanceSchema = new Schema({
    item: {
        type: Schema.Types.ObjectId,
        ref: 'Item',
        required: true
    },
    channel: {
        type: Schema.Types.ObjectId,
        ref: 'Channel',
        required: true
    },
    stock: {
        type: Number,
        default: 0
    },
    status: {
        type: String,
        required: true,
        emun: ['OnShelf', 'OffShelf'],
        default: 'OffShelf'
    }
}, {
    timestamps: true
});

ItemInstanceSchema
    .virtual('url')
    .get(function () {
        return '/product/iteminstance/' + this._id;
    });

module.exports = mongoose.model('ItemInstance', ItemInstanceSchema);