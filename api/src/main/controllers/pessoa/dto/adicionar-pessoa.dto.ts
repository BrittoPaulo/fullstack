import { IsInt, IsNotEmpty, IsString } from "class-validator";

import { MensagemValidador } from "@/main/utils/mensagem-validador";
export class AdicionarPessoaDto {

  @IsString({ message: MensagemValidador.string('Nome') })
  @IsNotEmpty({ message: MensagemValidador.vazio('Nome') })
  nome: string
  
  @IsInt({ message: MensagemValidador.inteiro('Cor Favorita') })
  @IsNotEmpty({ message: MensagemValidador.vazio('Cor Favorita') })
  corFavoritaId: number
  
}