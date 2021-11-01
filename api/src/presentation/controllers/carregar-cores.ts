import { Controller, HttpResponse } from '@/presentation/protocols'
import { CarregarCores } from '@/domain/usecases'
import { ok, serverError } from '@/presentation/helpers'

export class CarregarCoresController implements Controller {
  constructor(
    private readonly carregarCores: CarregarCores,
  ) {}

  async lidar(): Promise<HttpResponse> {
    try {
      const listaCores = await this.carregarCores.carregarCores()

      return ok(listaCores)
    } catch (erro) {
      return serverError(erro)
    }
  }
}
