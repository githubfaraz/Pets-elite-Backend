const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BlogSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    image: {
        type: String,
        require: true
    },
    introduction: {
        type: String,
        require: true
    },
    subtitles: {
        type: Array,
        require: true
    },
    content: {
        type: Array,
        require: true
    },
})

module.exports = mongoose.model('Blog', BlogSchema)