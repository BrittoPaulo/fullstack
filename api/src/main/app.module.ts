import { Module, HttpModule } from '@nestjs/common'

import { SequelizeModule } from '@/infra/orm/sequelize/sequelize.module'
import { PessoaModule } from './controllers/pessoa/pessoa.module'
import { CorModule } from './controllers/cor/cor.module'

@Module({
  imports: [HttpModule, SequelizeModule, PessoaModule, CorModule],
})
export class AppModule {}
