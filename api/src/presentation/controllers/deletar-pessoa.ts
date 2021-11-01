import { Controller, HttpResponse } from '@/presentation/protocols'
import { DeletarPessoa } from '@/domain/usecases'
import { noContent, serverError } from '@/presentation/helpers'

export class DeletarPessoaController implements Controller {
  constructor(
    private readonly deletarPessoa: DeletarPessoa,
  ) {}

  async lidar(parametros: DeletarPessoaController.Parametros): Promise<HttpResponse> {
    try {
      await this.deletarPessoa.deletar(parametros.id)

      return noContent()
    } catch (erro) {
      return serverError(erro)
    }
  }
}

export namespace DeletarPessoaController {
  export type Parametros = {
    id: number
  }
}
