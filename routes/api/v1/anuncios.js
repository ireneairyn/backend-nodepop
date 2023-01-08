"use strict";

const express = require("express");
const Anuncio = require("../../../models/Anuncio");

// Create router
const router = express.Router();

// GET /api/v1/anuncios
router.get("/", async (req, res, next) => {
  try {
    const nombre = req.query.nombre;
    const venta = req.query.venta;
    const precio = req.query.precio;
    const tag = req.query.tag;
    const start = req.query.start;
    const limit = req.query.limit;
    const sort = req.query.sort;

    const filter = {};
    if (nombre) {
      filter.nombre = new RegExp("^" + nombre, "i");
    }
    if (tag) {
      filter.tags = { $in: tag };
    }
    if (venta) {
      filter.venta = venta;
    }
    if (precio) {
      if (precio.includes("-")) {
        const precios = precio.split("-");
        if (precios[0] === "") {
          filter.precio = { $lte: precios[1] };
        } else if (precios[1] === "") {
          filter.precio = { $gte: precios[0] };
        } else {
          filter.precio = { $gte: precios[0], $lte: precios[1] };
        }
      } else {
        filter.precio = precio;
      }
    }

    const anuncios = await Anuncio.list(filter, start, limit, sort);

    // Set real URL for anuncio's foto
    anuncios.forEach((anuncio) => {
      if ("foto" in anuncio) {
        anuncio.foto = "http://localhost:3000/images/anuncios/" + anuncio.foto;
      }
    });

    res.json({ ads: anuncios });
  } catch (err) {
    next(err);
  }
});

//GET /api/v1/anuncios/tags
router.get("/tags", async (req, res, next) => {
  try {
    const existingTags = await Anuncio.listTags();
    res.json({ tags: existingTags });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
