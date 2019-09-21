const router = require("express").Router();

const makeExpressJsonCallback = require("../../helpers/makeExpressJsonCallback");

const create = require("../../../../interface_adapters/controllers/userController/create");
const showAll = require("../../../../interface_adapters/controllers/userController/showAll");

router.post("/", makeExpressJsonCallback(create));

router.get("/", makeExpressJsonCallback(showAll));
// router.get("/:id", "getOne");

// router.put("/:id", "update");

// router.delete("/:id", "delete");

module.exports = router;
