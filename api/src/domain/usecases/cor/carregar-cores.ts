import { CorModel } from '@/domain/entities'

export interface CarregarCores {
  carregarCores: () => Promise<CarregarCores.Resultado[]>
}

export namespace CarregarCores {
  export type Resultado = CorModel
}
