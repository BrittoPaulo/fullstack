import { PessoaModel } from '@/domain/entities'

export interface AdicionarPessoa {
  adicionar: (parametros: AdicionarPessoa.Parametros) => Promise<AdicionarPessoa.Resultado>
}

export namespace AdicionarPessoa {
  export type Parametros = Omit<PessoaModel, 'id'>
  export type Resultado = PessoaModel
}
