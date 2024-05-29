const { getHeader } = require('../controllers/getDataController');
const router = require('express').Router();

router.post('/get-headers', getHeader);

module.exports = router;
