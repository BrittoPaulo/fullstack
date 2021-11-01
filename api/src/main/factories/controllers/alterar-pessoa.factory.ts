import { Injectable, Inject } from '@nestjs/common'

import { Controller } from '@/presentation/protocols'
import { AlterarPessoa } from '@/domain/usecases'
import { ALTERAR_PESSOA_FACTORY } from '@/main/factories/providers'
import { AlterarPessoaController } from '@/presentation/controllers'
import { LogControllerDecoratorFactory } from './log-controller-decorator.factory'

@Injectable()
export class ConstruirAlterarPessoaController {
  constructor(@Inject(ALTERAR_PESSOA_FACTORY) private readonly alterarPessoa: AlterarPessoa) {}

  public fabricar(): Controller {
    const controller = new AlterarPessoaController(this.alterarPessoa)
    return new LogControllerDecoratorFactory(controller)
  }
}
