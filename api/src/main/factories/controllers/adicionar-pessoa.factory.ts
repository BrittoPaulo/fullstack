import { Injectable, Inject } from '@nestjs/common'

import { Controller } from '@/presentation/protocols'
import { AdicionarPessoa } from '@/domain/usecases'
import { ADICIONAR_PESSOA_FACTORY } from '@/main/factories/providers'
import { AdicionarPessoaController } from '@/presentation/controllers'
import { LogControllerDecoratorFactory } from './log-controller-decorator.factory'

@Injectable()
export class ConstruirAdicionarPessoaController {
  constructor(@Inject(ADICIONAR_PESSOA_FACTORY) private readonly adicionarPessoa: AdicionarPessoa) {}

  public fabricar(): Controller {
    const controller = new AdicionarPessoaController(this.adicionarPessoa)
    return new LogControllerDecoratorFactory(controller)
  }
}
