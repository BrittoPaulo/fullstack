import { PessoaModel } from '@/domain/entities'

export interface CarregarPessoas {
  carregarPessoas: (parametros: CarregarPessoas.Parametros) => Promise<CarregarPessoas.Resultado[]>
}

export namespace CarregarPessoas {
  export type Parametros = {
    sortField?: string
    sortOrder?: number
    limit?: number
    page?: number
  }
  export type Resultado = PessoaModel
}
