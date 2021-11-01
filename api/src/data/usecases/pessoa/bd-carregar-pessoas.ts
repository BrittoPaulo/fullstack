import { CarregarPessoas } from '@/domain/usecases'
import { CarregarPessoasRepository } from '@/data/protocols'

export class BdCarregarPessoas implements CarregarPessoas {

  constructor(
    private readonly adicionarPessoasRepository: CarregarPessoasRepository
  ) {}

  async carregarPessoas (parametros: CarregarPessoas.Parametros): Promise<CarregarPessoas.Resultado[]> {
    return await this.adicionarPessoasRepository.carregarPessoas(parametros)
  }
}