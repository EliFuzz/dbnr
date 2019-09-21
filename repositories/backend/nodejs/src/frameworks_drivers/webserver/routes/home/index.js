const router = require("express").Router();

const makeExpressJsonCallback = require("../../helpers/makeExpressJsonCallback");

const show = require("../../../../interface_adapters/controllers/homeController/show");

router.get("/", makeExpressJsonCallback(show));

module.exports = router;
