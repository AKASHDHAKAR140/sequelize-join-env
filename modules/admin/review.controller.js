const express = require("express")
const router = express.Router()
const data = require("./review.service")



router.post("/review", data.postdata)
router.get("/review", data.getdata)
module.exports = router;
