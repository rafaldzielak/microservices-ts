import { Request, Response } from "express";
import Lead from "../db/models/lead";

export const createLead = async (req: Request, res: Response) => {
  try {
    const { name, domain, lastVisit } = req.body;
    const lead = await Lead.create({
      name,
      domain,
      lastVisit,
      UserId: parseInt(req.params.id),
    });

    res.json(lead);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};
