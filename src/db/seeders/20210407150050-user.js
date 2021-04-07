const faker = require('faker')

const generateUsers = (count) => [...new Array(count)]
  .map(() => ({
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
  }))

module.exports = {
  up: async (queryInterface) => {
    const users = generateUsers(50)
    await queryInterface.bulkInsert('users', users)
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('users', {})
  },
}
