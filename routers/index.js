var router = require('express').Router();

router.use( require('../modules/user/book.controller'));

router.use( require('../modules/admin/review.controller'));

module.exports = router;