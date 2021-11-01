import { Injectable, Inject } from '@nestjs/common'

import { Controller } from '@/presentation/protocols'
import { CarregarCores } from '@/domain/usecases'
import { CARREGAR_CORES_FACTORY } from '@/main/factories/providers'
import { CarregarCoresController } from '@/presentation/controllers'
import { LogControllerDecoratorFactory } from './log-controller-decorator.factory'

@Injectable()
export class ConstruirCarregarCoresController {
  constructor(@Inject(CARREGAR_CORES_FACTORY) private readonly carregarCores: CarregarCores) {}

  public fabricar(): Controller {
    const controller = new CarregarCoresController(this.carregarCores)
    return new LogControllerDecoratorFactory(controller)
  }
}
