var router = require('express').Router();

router.use( require('../modules/book/book.controller'));

router.use( require('../modules/review/review.controller'));

module.exports = router;