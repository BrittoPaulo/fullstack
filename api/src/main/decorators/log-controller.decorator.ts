import { Controller, HttpResponse } from '@/presentation/protocols'

export class LogControllerDecorator implements Controller {
  constructor(private readonly controller: Controller) {}

  async lidar(requisicao: any): Promise<HttpResponse> {
    const httpResposta = await this.controller.lidar(requisicao)

    return httpResposta
  }
}
