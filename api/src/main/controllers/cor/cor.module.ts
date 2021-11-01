import { Module } from '@nestjs/common'

import { FactoryModule } from '@/main/factories/usecases/factory.module'
import { CorController } from './cor.controller'
import {
  ConstruirCarregarCoresController,
} from '@/main/factories/controllers'
@Module({
  imports: [FactoryModule],
  controllers: [CorController],
  providers: [
    ConstruirCarregarCoresController,
  ],
})
export class CorModule {}
