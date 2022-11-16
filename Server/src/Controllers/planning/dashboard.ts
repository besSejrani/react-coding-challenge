import { Request, Response } from "express";

import Planning from "../../Models/Planning";

// ========================================================================================================

export const getDashboardData = async (_: Request, res: Response) => {
  try {
    let industry = await Planning.aggregate([
      {
        $group: {
          _id: "$industry",
          total: { $sum: 1 },
        },
      },
      { $sort: { total: -1 } },
      { $limit: 5 },
    ]);

    let client = await Planning.aggregate([
      {
        $group: {
          _id: "$clientName",
          total: { $sum: 1 },
        },
      },
      { $sort: { total: -1 } },
      { $limit: 10 },
    ]);

    let totalPlannings = await Planning.find({}).count();

    let hours = await Planning.aggregate([
      {
        $group: {
          _id: "$totalHours",
          total: { $sum: 1 },
        },
      },
    ]);

    let open = await Planning.aggregate([
      {
        $match: {
          $where: function () {
            return this.name != true;
          },
        },
      },
      {
        $group: {
          _id: "$isUnassigned",
          total: { $sum: 1 },
        },
      },
    ]);

    await Planning.find({
      isUnassigned: { $in: ["true", true] },
    });

    let totalHours = 0;

    hours.forEach((data) => {
      totalHours += data.total;
    });

    let openPositions = 0;

    open.forEach((data) => {
      if (data._id === true) {
        openPositions += data.total;
      }
    });

    await res
      .status(200)
      .json({ industry, client, totalPlannings, totalHours, openPositions });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: "Server error" });
  }
};
