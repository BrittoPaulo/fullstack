import { CarregarCores } from '@/domain/usecases'

export interface CarregarCoresRepository {
  carregarCores: () => Promise<CarregarCoresRepository.Resultado[]>
}

export namespace CarregarCoresRepository {
  export type Resultado = CarregarCores.Resultado
}
