import { CarregarPessoas } from '@/domain/usecases'

export interface CarregarPessoasRepository {
  carregarPessoas: (parametros: CarregarPessoas.Parametros) => Promise<CarregarPessoasRepository.Resultado[]>
}

export namespace CarregarPessoasRepository {
  export type Parametros = CarregarPessoas.Parametros
  export type Resultado = CarregarPessoas.Resultado
}
