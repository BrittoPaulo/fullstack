import { CorModel, PessoaModel } from '@/domain/entities'
import { Table, Column, Model, PrimaryKey, AutoIncrement, BelongsTo, ForeignKey } from 'sequelize-typescript'
import { Cor } from './cor.entity'

@Table({modelName: 'pessoa', timestamps: true, freezeTableName: true})
export class Pessoa extends Model<PessoaModel> implements PessoaModel {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number

  @Column
  nome: string

  @ForeignKey(() => Cor)
  @Column({ field: 'cor_favorita_id' })
  corFavoritaId: number

  @BelongsTo(() => Cor)
  corFavorita: CorModel

  @Column({ field: 'createdAt' })
  createdAt: Date

  @Column({ field: 'updatedAt' })
  updatedAt: Date
}
