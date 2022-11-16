import { Request, Response } from "express";

import Planning from "../../Models/Planning";

// ========================================================================================================

export const getPlanning = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    let plannings = await Planning.findOne({ _id: id });

    await res.status(200).json(plannings);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: "Server error" });
  }
};
