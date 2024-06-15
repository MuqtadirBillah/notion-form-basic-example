const { Router: expressRouter } = require("express");
const router = expressRouter();

// form routes
const formRouter = require("./formRoutes");
router.use("/form", formRouter);

module.exports = router;