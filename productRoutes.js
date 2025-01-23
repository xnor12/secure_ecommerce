const express = require('express');
const { getProducts, purchaseProduct } = require('../controllers/productController');
const router = express.Router();

router.get('/', getProducts);
router.post('/purchase', purchaseProduct);
module.exports = router;