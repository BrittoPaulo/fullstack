import { Pessoa } from '@/infra/orm/entities'
import { PESSOA_REPOSITORY } from '@/infra/orm/sequelize/sequelize.repositories'

export const pessoaProvider = {
  provide: PESSOA_REPOSITORY,
  useValue: Pessoa,
}
