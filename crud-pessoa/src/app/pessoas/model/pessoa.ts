export interface Pessoa {
  id: number
  nome: string
  corFavoritaId: number
  /*corFavorita?: CorModel*/
  createdAt: Date
  updatedAt: Date
}

export interface ObjectPessoa {
  statusCode: number;
  body: {
    rows: Pessoa[],
    count: number
  };
}

export interface Parametros  {
  sortField?: string
  sortOrder?: number
  limit?: number
  page: number
}
