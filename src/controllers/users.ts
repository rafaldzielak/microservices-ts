import { Request, Response } from 'express'

import User from '../db/models/user'

export const updateUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const user = req.body
    const updated = await User.update(user, { where: { id } })

    res.json(updated)
  } catch (error) {
    console.error(error)
    res.sendStatus(500)
  }
}
