import { Cor } from '@/infra/orm/entities'
import { COR_REPOSITORY } from '@/infra/orm/sequelize/sequelize.repositories'

export const corProvider = {
  provide: COR_REPOSITORY,
  useValue: Cor,
}
