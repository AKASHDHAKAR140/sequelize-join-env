const express = require("express")
const router = express.Router()
const data = require("./book.service")



router.post("/book", data.postdata)
router.get("/book", data.getdata)
module.exports = router;
