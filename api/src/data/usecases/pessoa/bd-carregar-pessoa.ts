import { CarregarPessoa } from '@/domain/usecases'
import { CarregarPessoaRepository } from '@/data/protocols'

export class BdCarregarPessoa implements CarregarPessoa {

  constructor(
    private readonly adicionarPessoaRepository: CarregarPessoaRepository
  ) {}

  async carregarPessoa (id: number): Promise<CarregarPessoa.Resultado> {
    return await this.adicionarPessoaRepository.carregarPessoa(id)
  }
}