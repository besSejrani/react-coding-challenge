import express from "express";

import { getAllPlannings } from "../Controllers/planning/planningController";
import { getPlanning } from "../Controllers/planning/planningDetailsController";

import { getDashboardData } from "../Controllers/planning/dashboard";

// ========================================================================================================

const router = express.Router();

router.route("/api/v1/plannings").get(getAllPlannings);
router.route("/api/v1/planning/:id").get(getPlanning);

router.route("/api/v1/dashboard").get(getDashboardData);

export default router;
