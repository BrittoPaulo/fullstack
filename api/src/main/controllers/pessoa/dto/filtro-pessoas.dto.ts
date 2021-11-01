import { IsInt, IsString, IsOptional } from "class-validator";

import { MensagemValidador } from "@/main/utils/mensagem-validador";
export class FiltroPessoasDto {

  @IsString({ message: MensagemValidador.string('campo') })
  @IsOptional()
  sortField: string

  @IsInt({ message: MensagemValidador.inteiro('order') })
  @IsOptional()
  sortOrder: number

  @IsInt({ message: MensagemValidador.inteiro('limit') })
  @IsOptional()
  limit: number

  @IsInt({ message: MensagemValidador.inteiro('page') })
  @IsOptional()
  page: number

}