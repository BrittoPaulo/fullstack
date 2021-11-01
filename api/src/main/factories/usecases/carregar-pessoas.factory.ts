import { BdCarregarPessoas } from '@/data/usecases'
import { PessoaRepository } from '@/infra/orm/repositories'
import { CarregarPessoas } from '@/domain/usecases'
import { CARREGAR_PESSOAS_FACTORY } from '@/main/factories/providers'

export const carregarPessoasFactory = {
  provide: CARREGAR_PESSOAS_FACTORY,
  useFactory: (pessoaRepository: PessoaRepository): CarregarPessoas => {
    return new BdCarregarPessoas(pessoaRepository)
  },
  inject: [PessoaRepository],
}