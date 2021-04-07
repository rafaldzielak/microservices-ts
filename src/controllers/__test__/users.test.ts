import request from 'supertest'

import app from '../../app'
import User from '../../db/models/user'

describe('Controller: users', () => {
  beforeEach(async () => {
    await User.sync()
    await User.create({ firstName: 'before', lastName: 'test-lastname', email: 'test@dev.null' })
  })

  afterEach(async () => {
    await User.drop()
  })

  it('updates and returns user', async () => {
    const { body } = await request(app)
      .patch('/users/1')
      .send({ firstName: 'after' })

    const userInDb = await User.findByPk(1)

    expect(userInDb!.firstName).toBe('after')

    expect(body!.firstName).toBe('after')
  })
})
