var express = require("express");
var router = express.Router();

// OBTENER la lista de usuarios. 
router.get("/", function(req, res, next) {
  res.send("respond with a resource");
});

module.exports = router;
