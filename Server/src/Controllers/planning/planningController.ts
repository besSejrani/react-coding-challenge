import { Request, Response } from "express";

import Planning from "../../Models/Planning";

// ========================================================================================================

export const getAllPlannings = async (req: Request, res: Response) => {
  try {
    const page = Number(req.query.page) || 0;

    const planningsPerPage = 20;

    let plannings = await Planning.find({})
      .limit(page)
      .skip(page * planningsPerPage);

    await res.status(200).json(plannings);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: "Server error" });
  }
};
