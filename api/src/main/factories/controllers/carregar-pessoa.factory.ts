import { Injectable, Inject } from '@nestjs/common'

import { Controller } from '@/presentation/protocols'
import { CarregarPessoa } from '@/domain/usecases'
import { CARREGAR_PESSOA_FACTORY } from '@/main/factories/providers'
import { CarregarPessoaController } from '@/presentation/controllers'
import { LogControllerDecoratorFactory } from './log-controller-decorator.factory'

@Injectable()
export class ConstruirCarregarPessoaController {
  constructor(@Inject(CARREGAR_PESSOA_FACTORY) private readonly carregarPessoa: CarregarPessoa) {}

  public fabricar(): Controller {
    const controller = new CarregarPessoaController(this.carregarPessoa)
    return new LogControllerDecoratorFactory(controller)
  }
}
