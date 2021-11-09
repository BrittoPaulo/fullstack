export interface CorModel {
  id: number;
  descricao: string;
}

export interface ObjectCores {
  statusCode: number;
  body: CorModel[];
}
