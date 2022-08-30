const { drugsController } = require("../controllers/drugs.controller");
const { Router } = require("express");
const router = Router();

router.get("/alldrugs", drugsController.getAllDrugs);
router.post("/drugs", drugsController.addDrugs);

module.exports = router;
