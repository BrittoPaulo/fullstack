import { DeletarPessoa } from '@/domain/usecases'
import { DeletarPessoaRepository } from '@/data/protocols'

export class BdDeletarPessoa implements DeletarPessoa {

  constructor(
    private readonly adicionarPessoaRepository: DeletarPessoaRepository
  ) {}

  async deletar (id: number): Promise<void> {
    return await this.adicionarPessoaRepository.deletar(id)
  }
}