export interface AlterarPessoa {
  alterar: (parametros: AlterarPessoa.Parametros) => Promise<void>
}

export namespace AlterarPessoa {
  export type Parametros = {
    id: number
    corFavorita: string
  }
}
