import { CarregarPessoa } from '@/domain/usecases'

export interface CarregarPessoaRepository {
  carregarPessoa: (id: number) => Promise<CarregarPessoaRepository.Resultado>
}

export namespace CarregarPessoaRepository {
  export type Resultado = CarregarPessoa.Resultado
}
