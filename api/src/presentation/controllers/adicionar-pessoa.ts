import { Controller, HttpResponse } from '@/presentation/protocols'
import {
  AdicionarPessoa,
} from '@/domain/usecases'
import { ok, serverError } from '@/presentation/helpers'
import { PessoaModel } from '@/domain/entities'

export class AdicionarPessoaController implements Controller {
  constructor(
    private readonly adicionarPessoa: AdicionarPessoa,
  ) {}

  async lidar(parametros: AdicionarPessoaController.Parametros): Promise<HttpResponse> {
    try {
      const id = await this.adicionarPessoa.adicionar(parametros)

      return ok(id)
    } catch (erro) {
      return serverError(erro)
    }
  }
}

export namespace AdicionarPessoaController {
  export type Parametros = Omit<PessoaModel, 'id'>
}
