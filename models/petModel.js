const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PetSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    length: {
        type: String,
        require: true
    },
    style: {
        type: String,
        require: true
    },
    thickness: {
        type: String,
        require: true
    },
    details: {
        type: String,
        require: true
    },
    feeding_guidelines: {
        type: String,
        require: true
    },
    general_feeding_guidelines: {
        type: Array,
        default: [],
        require: true
    },
    nutrition_facts: {
        type: Array,
        default: [],
        require: true
    },
    image: {
        type: Object,
        require: true,
        default: {}
    },
    extra_images: {
        type: Array,
        default: []
    },
    age_consumption:{
        type: Array,
        default: []
    },
    size_consumption:{
        type: Array,
        default: []
    },
    featured:{
        type: Boolean,
        require: true
    }
})

module.exports = mongoose.model('Pet', PetSchema)