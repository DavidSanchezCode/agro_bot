const express = require('express');
const RegisterService = require('../../src/services/registerService');
const router =express.Router();
const service = new RegisterService();

//--------------------------------------------------------------------------------------------
router.post('/', async(req, res) => {
  const nombre = await  service.find();
    res.json(nombre);
});

router.post('/',async (req, res) => {
  const body = req.body;
  const newProduct = await service.create(body);
  res.status(201).json(newProduct);
});

module.exports = router;
