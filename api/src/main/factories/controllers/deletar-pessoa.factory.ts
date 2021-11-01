import { Injectable, Inject } from '@nestjs/common'

import { Controller } from '@/presentation/protocols'
import { DeletarPessoa } from '@/domain/usecases'
import { DELETAR_PESSOA_FACTORY } from '@/main/factories/providers'
import { DeletarPessoaController } from '@/presentation/controllers'
import { LogControllerDecoratorFactory } from './log-controller-decorator.factory'

@Injectable()
export class ConstruirDeletarPessoaController {
  constructor(@Inject(DELETAR_PESSOA_FACTORY) private readonly deletarPessoa: DeletarPessoa) {}

  public fabricar(): Controller {
    const controller = new DeletarPessoaController(this.deletarPessoa)
    return new LogControllerDecoratorFactory(controller)
  }
}
