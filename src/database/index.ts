import { Sequelize } from 'sequelize'

export const sequelize = new Sequelize({
  dialect: 'postgres',
  host: 'db-nova.cgrbfxibbh8a.us-east-1.rds.amazonaws.com',
  port: 5432,
  database: 'onebitflix_db',
  username: 'onebitflix',
  password: 'onebitflix',
	define: {
    underscored: true
  }
})