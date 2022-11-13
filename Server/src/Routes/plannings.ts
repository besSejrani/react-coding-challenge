import express from "express";

import { getAllPlannings } from "../Controllers/planningController";

// ========================================================================================================

const router = express.Router();

router.route("/api/v1/plannings").get(getAllPlannings);

export default router;
