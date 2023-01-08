"use strict";

const mongoose = require('mongoose');

// Crear esquema
const anuncioSchema = mongoose.Schema({
    nombre: String,
    venta: Boolean,
    precio: Number,
    foto: String,
    tags: [String]
});

// Dar un método al schema
anuncioSchema.statics.list = function (filter, start, limit, sort) {
    const query = Anuncio.find(filter);
    query.limit(limit);
    query.sort(sort)
    query.skip(start)
    return query.exec(); 
};

anuncioSchema.statics.listTags = function() {
    const query = Anuncio.distinct("tags"); 
    return query.exec(); 
}

// Crear el modelo
const Anuncio = mongoose.model('Anuncio', anuncioSchema);

module.exports = Anuncio;