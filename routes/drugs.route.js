const { drugsController } = require("../controllers/drugs.controller");
const { Router } = require("express");
const router = Router();

router.get("/alldrugs", drugsController.getAllDrugs);
router.post("/drugs", drugsController.addDrugs);
router.patch('/amountPlus', drugsController.amountPatch)
router.patch('/amountMinus', drugsController.amountPatch)


module.exports = router;
