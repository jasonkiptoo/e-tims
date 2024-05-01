const { getHeader } = require('../controllers/getDataController');
const router = require('express').Router();

router.get('/get-headers', getHeader);

module.exports = router;
