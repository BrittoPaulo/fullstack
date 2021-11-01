import { Controller, HttpResponse } from '@/presentation/protocols'
import { CarregarPessoa } from '@/domain/usecases'
import { ok, serverError } from '@/presentation/helpers'

export class CarregarPessoaController implements Controller {
  constructor(
    private readonly carregarPessoa: CarregarPessoa,
  ) {}

  async lidar(parametros: CarregarPessoaController.Parametros): Promise<HttpResponse> {
    try {
      const pessoa = await this.carregarPessoa.carregarPessoa(parametros.id)

      return ok(pessoa)
    } catch (erro) {
      return serverError(erro)
    }
  }
}

export namespace CarregarPessoaController {
  export type Parametros = {
    id: number
  }
}
