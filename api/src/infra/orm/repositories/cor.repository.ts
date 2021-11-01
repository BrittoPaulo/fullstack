import { Injectable, Inject } from '@nestjs/common'

import { Cor } from '@/infra/orm/entities'
import {
  CarregarCoresRepository,
} from '@/data/protocols'
import { COR_REPOSITORY } from '@/infra/orm/sequelize/sequelize.repositories'

@Injectable()
export class CorRepository
  implements
    CarregarCoresRepository
{

  constructor(@Inject(COR_REPOSITORY) private readonly corRepository: typeof Cor) { }

  async carregarCores(): Promise<CarregarCoresRepository.Resultado[]> {
    return await this.corRepository.findAll<Cor>()
  }
}
