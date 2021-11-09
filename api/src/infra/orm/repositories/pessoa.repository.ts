import { Cor } from './../entities/cor.entity';
import { Injectable, Inject } from '@nestjs/common'

import { Pessoa } from '@/infra/orm/entities'
import {
  AdicionarPessoaRepository,
  AlterarPessoaRepository,
  CarregarPessoaRepository,
  CarregarPessoasRepository,
  DeletarPessoaRepository,
} from '@/data/protocols'
import { PESSOA_REPOSITORY } from '@/infra/orm/sequelize/sequelize.repositories'
import { PessoaHelper } from '../helpers/pessoa-helper'

@Injectable()
export class PessoaRepository
  implements
  AdicionarPessoaRepository,
  AlterarPessoaRepository,
  CarregarPessoaRepository,
  CarregarPessoasRepository,
  DeletarPessoaRepository {
  private pessoaHelper: PessoaHelper

  constructor(@Inject(PESSOA_REPOSITORY) private readonly pessoaRepository: typeof Pessoa) {
    this.pessoaHelper = new PessoaHelper()
  }

  async adicionar(parametros: AdicionarPessoaRepository.Parametros): Promise<AdicionarPessoaRepository.Resultado> {
    return await this.pessoaRepository.create<Pessoa>(parametros)
  }

  async carregarPessoa(id: number): Promise<CarregarPessoaRepository.Resultado> {
    return await this.pessoaRepository.findOne<Pessoa>({ where: { id }, include: [{ model: Cor }] })
  }

  async carregarPessoas(parametros: CarregarPessoasRepository.Parametros): Promise<CarregarPessoasRepository.Resultado[]> {
    const paramOrderBy = !parametros.sortField
      ? await this.pessoaHelper.orderBy('id', 1)
      : await this.pessoaHelper.orderBy(parametros.sortField, parametros.sortOrder)
    const limit = parametros.limit ? parametros.limit * 1 : 10
    const offset = parametros.page == 1 ? parametros.page - 1 : parametros.page * 1
    return await this.pessoaRepository.findAndCountAll<Pessoa>({
      order: paramOrderBy,
      offset: parametros.page ? offset : 0,
      limit,
      include: [{ model: Cor }]
    })
  }
  async alterar(parametros: AlterarPessoaRepository.Parametros): Promise<void> {
    const {
      ['id']: id,
      ...rest
    } = parametros
    await this.pessoaRepository.update<Pessoa>(rest, { where: { id } })
  }

  async deletar(id: number): Promise<void> {
    await this.pessoaRepository.destroy({ where: { id } })
  }

}
