import * as config from 'config'
import * as path from 'path'

const dbConfig = config.get('db')

export const sequelizeConfig: SequelizeOptions = {
  storage: path.join(__dirname, '..', '..', '..', '..', 'database', dbConfig.storage),
  dialect: dbConfig.dialect,
  dialectOptions: {
    options: {
      enableArithAbort: true,
      requestTimeout: 100000,
      useUTC: true, //for reading from database
      dateStrings: true,
      typeCast: function (field, next) {
        // for reading from database
        if (field.type === 'DATETIME') {
          return field.string()
        }
        return next()
      },
    },
  },
  logging: false,
}

type SequelizeOptions = {
  username?: string
  password?: string
  storage?: string
  database?: string
  host?: string
  port?: number | string
  dialect?: string
  dialectOptions: any
  logging: boolean
}
