import { Router } from 'express'

import usersRoutes from './users'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const setup = (router: Router) => {
  usersRoutes(router)
}

export default setup
