"use strict";

const mongoose = require('mongoose');

// Crear esquema
const anuncioSchema = mongoose.Schema({
    name: String,
    selling: Boolean,
    price: Number,
    picture: String,
    tags: [String]
});

// Dar un método al schema
anuncioSchema.statics.list = function (filter, limit, sort, cb) {
    const query = Anuncio.find(filter);
    query.limit(limit);
    query.sort(sort); 
    query.exec(cb);  
    return query.exec(); 
};

anuncioSchema.statics.listTags = function() {
    const query = Anuncio.distinct("tags"); 
    return query.exec(); 
}

// Crear el modelo
const Anuncio = mongoose.model('Anuncio', anuncioSchema);

module.exports = Anuncio;