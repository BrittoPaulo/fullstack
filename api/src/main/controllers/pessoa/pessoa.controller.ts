import { Controller, Get, Res, Param, ParseIntPipe, Post, UsePipes, ValidationPipe, Body, Put, Delete, Query } from '@nestjs/common'

import { HttpResponse } from '@/presentation/protocols'
import { controllerAdpter } from '@/main/adpters/controller.adpter'
import { ApiTags } from '@nestjs/swagger'

import {
  ConstruirAdicionarPessoaController,
  ConstruirAlterarPessoaController,
  ConstruirCarregarPessoaController,
  ConstruirCarregarPessoasController,
  ConstruirDeletarPessoaController,
} from '@/main/factories/controllers'
import { AdicionarPessoaDto, AlterarPessoaDto, FiltroPessoasDto } from './dto'

@ApiTags('Pessoa')
@Controller('pessoa')
export class PessoaController {
  constructor(
    private readonly construirAdicionarPessoaController: ConstruirAdicionarPessoaController,
    private readonly construirAlterarPessoaController: ConstruirAlterarPessoaController,
    private readonly construirCarregarPessoaController: ConstruirCarregarPessoaController,
    private readonly construirCarregarPessoasController: ConstruirCarregarPessoasController,
    private readonly construirDeletarPessoaController: ConstruirDeletarPessoaController,
  ) { }

  @Post()
  @UsePipes(new ValidationPipe({ whitelist: true }))
  async adicionarPessoa(@Body() body: AdicionarPessoaDto, @Res() res: any): Promise<HttpResponse> {
    const resultado = await controllerAdpter(this.construirAdicionarPessoaController.fabricar(), body)
    return res.status(resultado.statusCode).json(resultado)
  }

  @Put(':id')
  async alterarPessoa(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: AlterarPessoaDto,
    @Res() res: any,
  ): Promise<HttpResponse> {
    const resultado = await controllerAdpter(this.construirAlterarPessoaController.fabricar(), {
      ...body,
      id,
    })
    return res.status(resultado.statusCode).json(resultado)
  }

  @Get(':id')
  async carregarPessoa(@Param('id', ParseIntPipe) id: number, @Res() res: any): Promise<HttpResponse> {
    console.info('Buscando pessoa por ID...')
    const resultado = await controllerAdpter(this.construirCarregarPessoaController.fabricar(), {
      id
    })
    return res.status(resultado.statusCode).json(resultado)
  }

  @Get()
  async carregarPessoas(@Query() filtro: FiltroPessoasDto, @Res() res: any): Promise<HttpResponse> {
    console.info('Buscando pessoas...')
    const resultado = await controllerAdpter(this.construirCarregarPessoasController.fabricar(), filtro)
    return res.status(resultado.statusCode).json(resultado)
  }

  @Delete(':id')
  async deletarPessoa(@Param('id', ParseIntPipe) id: number, @Res() res: any): Promise<HttpResponse> {
    const resultado = await controllerAdpter(this.construirDeletarPessoaController.fabricar(), {
      id,
    })
    return res.status(resultado.statusCode).json(resultado)
  }
}
