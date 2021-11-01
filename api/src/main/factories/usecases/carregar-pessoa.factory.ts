import { BdCarregarPessoa } from '@/data/usecases'
import { PessoaRepository } from '@/infra/orm/repositories'
import { CarregarPessoa } from '@/domain/usecases'
import { CARREGAR_PESSOA_FACTORY } from '@/main/factories/providers'

export const carregarPessoaFactory = {
  provide: CARREGAR_PESSOA_FACTORY,
  useFactory: (pessoaRepository: PessoaRepository): CarregarPessoa => {
    return new BdCarregarPessoa(pessoaRepository)
  },
  inject: [PessoaRepository],
}