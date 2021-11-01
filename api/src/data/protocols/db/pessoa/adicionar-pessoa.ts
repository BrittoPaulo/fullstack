import { AdicionarPessoa } from '@/domain/usecases'

export interface AdicionarPessoaRepository {
  adicionar: (dado: AdicionarPessoaRepository.Parametros) => Promise<AdicionarPessoaRepository.Resultado>
}

export namespace AdicionarPessoaRepository {
  export type Parametros = AdicionarPessoa.Parametros
  export type Resultado = AdicionarPessoa.Resultado
}