import { Injectable, Inject } from '@nestjs/common'

import { Controller } from '@/presentation/protocols'
import { CarregarPessoas } from '@/domain/usecases'
import { CARREGAR_PESSOAS_FACTORY } from '@/main/factories/providers'
import { CarregarPessoasController } from '@/presentation/controllers'
import { LogControllerDecoratorFactory } from './log-controller-decorator.factory'

@Injectable()
export class ConstruirCarregarPessoasController {
  constructor(@Inject(CARREGAR_PESSOAS_FACTORY) private readonly carregarPessoas: CarregarPessoas) {}

  public fabricar(): Controller {
    const controller = new CarregarPessoasController(this.carregarPessoas)
    return new LogControllerDecoratorFactory(controller)
  }
}
