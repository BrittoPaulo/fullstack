import { BdCarregarCores } from '@/data/usecases'
import { CorRepository } from '@/infra/orm/repositories'
import { CarregarCores } from '@/domain/usecases'
import { CARREGAR_CORES_FACTORY } from '@/main/factories/providers'

export const carregarCoresFactory = {
  provide: CARREGAR_CORES_FACTORY,
  useFactory: (corRepository: CorRepository): CarregarCores => {
    return new BdCarregarCores(corRepository)
  },
  inject: [CorRepository],
}