import { IsNotEmpty, IsString } from "class-validator";

import { MensagemValidador } from "@/main/utils/mensagem-validador";
export class AlterarPessoaDto {

  @IsString({ message: MensagemValidador.string('Cor Favorita') })
  @IsNotEmpty({ message: MensagemValidador.vazio('Cor Favorita') })
  corFavorita: string
  
}