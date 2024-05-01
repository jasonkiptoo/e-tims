const { getHeader } = require('../controllers/url');
const router = require('express').Router();

router.get('/get-headers', getHeader);

module.exports = router;
