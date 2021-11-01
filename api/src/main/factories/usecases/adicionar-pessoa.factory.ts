import { BdAdicionarPessoa } from '@/data/usecases'
import { PessoaRepository } from '@/infra/orm/repositories'
import { AdicionarPessoa } from '@/domain/usecases'
import { ADICIONAR_PESSOA_FACTORY } from '@/main/factories/providers'

export const adicionarPessoaFactory = {
  provide: ADICIONAR_PESSOA_FACTORY,
  useFactory: (pessoaRepository: PessoaRepository): AdicionarPessoa => {
    return new BdAdicionarPessoa(pessoaRepository)
  },
  inject: [PessoaRepository],
}