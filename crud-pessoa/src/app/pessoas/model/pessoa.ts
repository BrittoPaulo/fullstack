import { CorModel } from '../../cores/model/cor';

export interface Pessoa {
  id: number
  nome: string
  corFavoritaId: number
  corFavorita?: CorModel
  createdAt: Date
  updatedAt: Date
}
export interface CriarPessoa {
  nome: string;
  corFavoritaId: number;
}
export interface ObjectPessoas {
  statusCode: number;
  body: {
    rows: Pessoa[],
    count: number
  };
}
export interface ObjectPessoa {
  statusCode: number;
  body: Pessoa;
}
export interface Parametros {
  sortField?: string
  sortOrder?: number
  limit?: number
  page: number
}
