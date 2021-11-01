import { DeletarPessoa } from '@/domain/usecases'

export interface DeletarPessoaRepository {
  deletar: (id: number) => Promise<void>
}