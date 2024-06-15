const express = require("express");
const formController = require("../controllers/formController")
const formRouter = express.Router();

formRouter.route("/whatsapp-membership").post(formController.whatsAppGroupMemebershipRegistration);

module.exports = formRouter;