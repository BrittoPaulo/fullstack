import { CarregarCores } from '@/domain/usecases'
import { CarregarCoresRepository } from '@/data/protocols'

export class BdCarregarCores implements CarregarCores {

  constructor(
    private readonly adicionarCoresRepository: CarregarCoresRepository
  ) {}

  async carregarCores (): Promise<CarregarCores.Resultado[]> {
    return await this.adicionarCoresRepository.carregarCores()
  }
}