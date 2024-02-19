const express = require("express");
const router = express.Router();

// Controlador
const itemsController = require("./items.controller");

// Rutas /api/items +

router.get("/:id", async (req, res) => {
  try {    
    const response = await itemsController.getItemByID(req.params.id);
    if (response.success) {
      res.status(200).json(response);
    } else {
      res.status(500).json(response);
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error consultando el item: "+req.params.id,
      data: null,
      error: error,
      extra: {},
    });
  }
});

router.get("", async (req, res) => {
  try {
    const response = await itemsController.searchItems(req.query.q, req.query.offset);
    if (response.success) {
      res.status(200).json(response);
    } else {
      res.status(500).json(response);
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error buscando el texto: "+req.query.q,
      data: null,
      error: error,
      extra: {},
    });
  }
});

module.exports = router;