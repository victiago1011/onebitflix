const { Pool } = require("pg")
require("dotenv").config()

module.exports = new Pool({    
      host: 'db-nova.cgrbfxibbh8a.us-east-1.rds.amazonaws.com',
      port: '5432',
      database: 'onebitflix_db',
      username: 'onebitflix',
      password: 'onebitflix'
  });