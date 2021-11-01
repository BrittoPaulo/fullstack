import { PessoaModel } from '@/domain/entities'

export interface CarregarPessoa {
  carregarPessoa: (id: number) => Promise<CarregarPessoa.Resultado>
}

export namespace CarregarPessoa {
  export type Resultado = PessoaModel
}
