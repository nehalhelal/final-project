const router = require("express").Router();
const upload = require("../app/middleware/upload.middleware");
const userController = require("../app/controller/user.controller");
const {auth,authuser} = require("../app/middleware/auth.middleware");

// auth is for admin --- authuser is for  normal users  
router.post("/register", userController.register);
router.get("/",auth, userController.all);

router.get("/single/:id", userController.single);

router.delete("/",auth, userController.delAll);
router.delete("/single/:id", authuser, userController.delete);

router.patch("/", userController.editeSingle);
router.patch("/single/:id",authuser, userController.editeSingle);

router.post("/login", userController.login);

router.post("/logout",authuser, userController.logout);
router.post("/logoutAll", auth, userController.logoutAll);

//  use patch or put with any edite or active
router.patch("/activate/:id", userController.activate);

router.get("/profile", authuser, userController.profile);

// router.patch("/updateProfileimg", auth, userController.updateProfileimg)

router.patch(
  "/updateProfileimg",
  auth,authuser,
  upload.single("img"),
  userController.updateProfileimg
);

module.exports = router;
