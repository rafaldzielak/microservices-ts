import { DataTypes, Model } from 'sequelize'

import sequelize from '../../clients/sequelize'

interface UserAttrs {
  id: number
  firstName: string | null
  lastName: string | null
  email: string | null
}

class User extends Model<UserAttrs, Partial<UserAttrs>> implements UserAttrs {
    public id!: number
    public firstName!: string | null
    public lastName!: string | null
    public email!: string | null
}

User.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  firstName: DataTypes.STRING,
  lastName: DataTypes.STRING,
  email: DataTypes.STRING,
}, {
  sequelize,
  modelName: 'User',
  tableName: 'users',
  timestamps: true,
})

export default User
