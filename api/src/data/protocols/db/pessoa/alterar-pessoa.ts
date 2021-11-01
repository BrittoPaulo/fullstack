import { AlterarPessoa } from '@/domain/usecases'

export interface AlterarPessoaRepository {
  alterar: (dado: AlterarPessoaRepository.Parametros) => Promise<void>
}

export namespace AlterarPessoaRepository {
  export type Parametros = AlterarPessoa.Parametros
}