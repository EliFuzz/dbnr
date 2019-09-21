const router = require("express").Router();

const homeRoutes = require("./routes/home");
const usersRoutes = require("./routes/users");

router.use("/home", homeRoutes);
router.use("/users", usersRoutes);

router.get("/", async (req, res) => {
  res.json({ message: "API" });
});

module.exports = router;
