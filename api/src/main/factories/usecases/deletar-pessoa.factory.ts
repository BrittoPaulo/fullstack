import { BdDeletarPessoa } from '@/data/usecases'
import { PessoaRepository } from '@/infra/orm/repositories'
import { DeletarPessoa } from '@/domain/usecases'
import { DELETAR_PESSOA_FACTORY } from '@/main/factories/providers'

export const deletarPessoaFactory = {
  provide: DELETAR_PESSOA_FACTORY,
  useFactory: (pessoaRepository: PessoaRepository): DeletarPessoa => {
    return new BdDeletarPessoa(pessoaRepository)
  },
  inject: [PessoaRepository],
}