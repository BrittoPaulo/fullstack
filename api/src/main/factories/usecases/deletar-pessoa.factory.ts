import { BdAdicionarPessoa } from '@/data/usecases'
import { PessoaRepository } from '@/infra/orm/repositories'
import { AdicionarPessoa } from '@/domain/usecases'
import { DELETAR_PESSOA_FACTORY } from '@/main/factories/providers'

export const deletarPessoaFactory = {
  provide: DELETAR_PESSOA_FACTORY,
  useFactory: (pessoaRepository: PessoaRepository): AdicionarPessoa => {
    return new BdAdicionarPessoa(pessoaRepository)
  },
  inject: [PessoaRepository],
}