const express = require("express");
const homeController = require("../controllers/homeController");
const userRoute = require("./userRouter");
const router = express.Router();

router.get("/", homeController.home);
router.use("/user", userRoute);

module.exports = router;
