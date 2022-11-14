import express from "express";

import { getAllPlannings } from "../Controllers/planningController";
import { getPlanning } from "../Controllers/planningDetailsController";

// ========================================================================================================

const router = express.Router();

router.route("/api/v1/plannings").get(getAllPlannings);
router.route("/api/v1/planning/:id").get(getPlanning);

export default router;
