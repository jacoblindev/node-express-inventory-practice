const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    icon: {
        type: String,
        default: 'placeholdericon.png'
    }
}, {
    timestamps: true
});

CategorySchema
    .virtual('url')
    .get(function () {
        return '/product/category/' + this._id;
    });

CategorySchema
    .virtual('iconUrl')
    .get(function () {
        return '/pubblic/images/' + this.icon;
    });

module.exports = mongoose.model('Category', CategorySchema);