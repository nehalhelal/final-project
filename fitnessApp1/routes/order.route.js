const OrderController = require("../app/controller/order.controller");
const { auth, authuser } = require("../app/middleware/auth.middleware");
const router = require("express").Router();

// router.post("/addOrder", auth, OrderController.addOrder);
router.get("/singleOrder/:id", OrderController.singleOrder);
router.get("/",auth, OrderController.allOrders);
// router.delete("/all/:id", auth, OrderController.delOrder);
// router.delete("/", auth, OrderController.delAllOrders);
// router.patch("/single/:id", auth, OrderController.editOrder);

module.exports = router;
