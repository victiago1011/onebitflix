import express from 'express'
import { adminJs, adminJsRouter } from './adminjs'
import { sequelize } from './database'

const app = express()

app.use(express.static('public'))

app.use(adminJs.options.rootPath, adminJsRouter)

//const port = process.env.PORT || 3000

app.listen(process.env.PORT || 5000, () => {
  sequelize.authenticate().then(() => {
    console.log('DB connection successfull.')
  })

  console.log(`Server started successfuly at port.`)
})