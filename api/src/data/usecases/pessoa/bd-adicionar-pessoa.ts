import { AdicionarPessoa } from '@/domain/usecases'
import { AdicionarPessoaRepository } from '@/data/protocols'

export class BdAdicionarPessoa implements AdicionarPessoa {

  constructor(
    private readonly adicionarPessoaRepository: AdicionarPessoaRepository
  ) {}

  async adicionar (parametros: AdicionarPessoa.Parametros): Promise<AdicionarPessoa.Resultado> {
    return await this.adicionarPessoaRepository.adicionar(parametros)
  }
}