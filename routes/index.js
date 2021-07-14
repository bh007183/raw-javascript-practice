const router = require("express").Router()



router.use("/api", require("./api-routes"))

router.use("/file", require("./html-routes"))

module.exports = router