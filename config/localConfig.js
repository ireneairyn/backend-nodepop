"use strict";

module.exports = {
  dbURI: 'mongodb://localhost:3000/nodepop',
  jwt: {
      secret: 'pruebaClave',
      expiresIn: '2d'
  },
  errores: {

      TOKEN_NOT_FOUND: "Token not found",
      INVALID_TOKEN: "Invalid token",
      NOT_FOUND: "Not found",
  },
  tags: ['work', 'lifestyle', 'motor', 'mobile'],
};