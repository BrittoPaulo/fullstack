import { CorModel } from '@/domain/entities'
import { Table, Column, Model, PrimaryKey, AutoIncrement } from 'sequelize-typescript'

@Table({modelName: 'cor', timestamps: false, freezeTableName: true})
export class Cor extends Model<CorModel> implements CorModel {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number

  @Column({ field: 'descricao' })
  descricao: string
}
