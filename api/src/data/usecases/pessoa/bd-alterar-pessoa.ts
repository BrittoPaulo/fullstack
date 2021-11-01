import { AlterarPessoa } from '@/domain/usecases'
import { AlterarPessoaRepository } from '@/data/protocols'

export class BdAlterarPessoa implements AlterarPessoa {

  constructor(
    private readonly alterarPessoaRepository: AlterarPessoaRepository
  ) {}

  async alterar (parametros: AlterarPessoa.Parametros): Promise<void> {
    return await this.alterarPessoaRepository.alterar(parametros)
  }
}