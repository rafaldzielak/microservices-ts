import { Router } from 'express'

import { updateUser } from '../controllers/users'

export default (router: Router) => {
  router.patch('/users/:id', updateUser)
}
