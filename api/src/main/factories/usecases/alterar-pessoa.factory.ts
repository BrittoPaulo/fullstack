import { BdAlterarPessoa } from '@/data/usecases'
import { PessoaRepository } from '@/infra/orm/repositories'
import { AlterarPessoa } from '@/domain/usecases'
import { ALTERAR_PESSOA_FACTORY } from '@/main/factories/providers'

export const alterarPessoaFactory = {
  provide: ALTERAR_PESSOA_FACTORY,
  useFactory: (pessoaRepository: PessoaRepository): AlterarPessoa => {
    return new BdAlterarPessoa(pessoaRepository)
  },
  inject: [PessoaRepository],
}