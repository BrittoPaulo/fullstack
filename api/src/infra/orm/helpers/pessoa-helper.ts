export class PessoaHelper {
  async orderBy (sortColumn: string, sortDirection: number) {
    const direction = sortDirection == 1 ? 'ASC' : 'DESC'

    let referencia = {
      id:  [['id', direction]],
      nome: [['nome', direction]],
      corFavorita: [['corFavorita', direction]],
    }
    return referencia[sortColumn]
  }
}
