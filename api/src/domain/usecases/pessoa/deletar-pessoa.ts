export interface DeletarPessoa {
  deletar: (id: number) => Promise<void>
}