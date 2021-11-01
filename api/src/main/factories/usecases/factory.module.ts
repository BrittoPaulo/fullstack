import { corProvider, pessoaProvider } from '@/infra/orm/providers'
import { CorRepository, PessoaRepository } from '@/infra/orm/repositories'
import { Module, HttpModule } from '@nestjs/common'
import {
  adicionarPessoaFactory,
  alterarPessoaFactory,
  carregarPessoaFactory,
  carregarPessoasFactory,
  deletarPessoaFactory,
} from '.'
import { carregarCoresFactory } from './carregar-cores.factory'

@Module({
  providers: [
    // repository
    PessoaRepository,
    CorRepository,

    // providers
    pessoaProvider,
    corProvider,

    // factories
    adicionarPessoaFactory,
    alterarPessoaFactory,
    carregarPessoaFactory,
    carregarPessoasFactory,
    deletarPessoaFactory,
    carregarCoresFactory
  ],
  exports: [
    // factories
    adicionarPessoaFactory,
    alterarPessoaFactory,
    carregarPessoaFactory,
    carregarPessoasFactory,
    deletarPessoaFactory,
    carregarCoresFactory,
  ],
  imports: [HttpModule],
})
export class FactoryModule {}
