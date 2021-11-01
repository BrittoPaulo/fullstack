export class ParametroFaltandoError extends Error {
  constructor(nomeCampo: string) {
    super(`Campo ${nomeCampo} não preenchido`)
    this.name = `campoNaoPreenchido`
  }
}
