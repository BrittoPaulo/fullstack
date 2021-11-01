import { Controller, HttpResponse } from '@/presentation/protocols'
import { AlterarPessoa } from '@/domain/usecases'
import { ok, serverError } from '@/presentation/helpers'

export class AlterarPessoaController implements Controller {
  constructor(
    private readonly alterarPessoa: AlterarPessoa,
  ) {}

  async lidar(parametros: AlterarPessoaController.Parametros): Promise<HttpResponse> {
    try {
      const id = await this.alterarPessoa.alterar(parametros)

      return ok(id)
    } catch (erro) {
      return serverError(erro)
    }
  }
}

export namespace AlterarPessoaController {
  export type Parametros = {
    id: number
    corFavorita: string
  }
}
