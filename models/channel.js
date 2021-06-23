const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ChannelSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true,
        emun: ['Open', 'Maintenance', 'Closed'],
        default: 'Maintenance'
    },
    percentage: {
        type: Number,
        default: 1
    }
}, {
    timestamps: true
});

ChannelSchema
    .virtual('url')
    .get(function () {
        return '/product/channel/' + this._id;
    });

module.exports = mongoose.model('Channel', ChannelSchema);