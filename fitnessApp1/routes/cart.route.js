const router = require("express").Router();
const cartController = require("../app/controller/cart.controller");
const { auth, authuser } = require("../app/middleware/auth.middleware");
router.post("/add", authuser, cartController.add);

router.get("/", authuser, cartController.all);
router.get("/single/:id", authuser, cartController.single);

router.patch("/single/:id", authuser, cartController.editSingle);

router.delete("/single/:id", authuser, cartController.delSingle);
router.delete("/", auth, cartController.delAll);




module.exports = router;
