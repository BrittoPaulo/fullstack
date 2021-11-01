import { Controller, Get, Res } from '@nestjs/common'

import { HttpResponse } from '@/presentation/protocols'
import { controllerAdpter } from '@/main/adpters/controller.adpter'
import { ApiTags } from '@nestjs/swagger'

import {
  ConstruirCarregarCoresController,
} from '@/main/factories/controllers'

@ApiTags('Cor')
@Controller('cor')
export class CorController {
  constructor(
    private readonly construirCarregarCoresController: ConstruirCarregarCoresController,
  ) {}

  @Get()
  async carregarCores(@Res() res: any): Promise<HttpResponse> {
    console.info('Buscando cores...')
    const resultado = await controllerAdpter(this.construirCarregarCoresController.fabricar())
    return res.status(resultado.statusCode).json(resultado)
  }
}
