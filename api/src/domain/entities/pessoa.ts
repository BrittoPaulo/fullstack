import { CorModel } from '.'

export interface PessoaModel {
  id: number
  nome: string
  corFavoritaId: number
  corFavorita?: CorModel
  createdAt: Date
  updatedAt: Date
}
