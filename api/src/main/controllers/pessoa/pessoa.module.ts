import { Module } from '@nestjs/common'

import { FactoryModule } from '@/main/factories/usecases/factory.module'
import { PessoaController } from './pessoa.controller'
import {
  ConstruirAdicionarPessoaController,
  ConstruirAlterarPessoaController,
  ConstruirCarregarPessoaController,
  ConstruirCarregarPessoasController,
  ConstruirDeletarPessoaController,
} from '@/main/factories/controllers'
@Module({
  imports: [FactoryModule],
  controllers: [PessoaController],
  providers: [
    ConstruirAdicionarPessoaController,
    ConstruirAlterarPessoaController,
    ConstruirCarregarPessoaController,
    ConstruirCarregarPessoasController,
    ConstruirDeletarPessoaController,
  ],
})
export class PessoaModule {}
