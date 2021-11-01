import { Controller, HttpResponse } from '@/presentation/protocols'
import { CarregarPessoas } from '@/domain/usecases'
import { ok, serverError } from '@/presentation/helpers'

export class CarregarPessoasController implements Controller {
  constructor(
    private readonly carregarPessoas: CarregarPessoas,
  ) {}

  async lidar(parametros: CarregarPessoasController.Parametros): Promise<HttpResponse> {
    try {
      const listaPessoas = await this.carregarPessoas.carregarPessoas(parametros)

      return ok(listaPessoas)
    } catch (erro) {
      return serverError(erro)
    }
  }
}

export namespace CarregarPessoasController {
  export type Parametros = {
    sortField?: string
    sortOrder?: number
    limit?: number
    page?: number
  }
}
