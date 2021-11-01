import { Sequelize } from 'sequelize-typescript'
import { sequelizeConfig } from '@/infra/orm/config/sequelize.config'
import { Pessoa } from '@/infra/orm/entities'
import { Cor } from '../entities/cor.entity'

const SEQUELIZE = 'SEQUELIZE'

export const sequelizeProvider = [
  {
    provide: SEQUELIZE,
    useFactory: async () => {
      const sequelize = new Sequelize(sequelizeConfig as any)
      sequelize.addModels([
        Pessoa,
        Cor,
      ])
      await sequelize.sync()
      return sequelize
    },
  },
]
