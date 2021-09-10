import { Request, Response } from "express";
import { Op, Sequelize } from "sequelize";
import Lead from "../db/models/lead";

import User from "../db/models/user";

export const updateUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = req.body;
    const userInDb = await User.findByPk(id);
    const updated = await userInDb?.update(user, { where: { id } });
    res.json(updated);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

export const findUser = async (req: Request, res: Response) => {
  try {
    const { keyword } = req.params;
    const searchArr: object[] = [];
    Object.keys(User.rawAttributes).forEach((key) => {
      if (key !== "createdAt" && key !== "updatedAt" && key !== "id") {
        searchArr.push({
          [key]: Sequelize.where(
            Sequelize.fn("LOWER", Sequelize.col(key)),
            "LIKE",
            `%${keyword}%`
          ),
        });
      }
    });
    const foundUser = await User.findOne({
      where: {
        [Op.or]: searchArr,
      },
      include: Lead,
    });
    res.json(foundUser);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};
