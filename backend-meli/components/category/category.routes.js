const express = require("express");
const router = express.Router();

// Controlador
const categoryController = require("./category.controller");

// Rutas /api/category +

router.get("/:id", async (req, res) => {
  try {
    const response = await categoryController.getCategoryByID(req.params.id);
    if (response.success) {
      res.status(200).json(response);
    } else {
      res.status(500).json(response);
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error consultando la categoria: "+req.params.id,
      data: null,
      error: error,
      extra: {},
    });
  }
});

module.exports = router;