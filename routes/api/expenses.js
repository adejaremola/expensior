const express = require('express');
const router = express.Router();

// @route       GET api/expenses/test
// Description  test expenses
// Access       Public
router.get('/test', (req, res) => res.json({message: "expenses works"}));

module.exports = router;
