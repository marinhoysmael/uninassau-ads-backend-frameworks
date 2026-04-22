class Aluno{
    /**
     * @param {number} id
     * @param {string} nome
     * @param {string} matricula 
     */
  constructor(id, nome, matricula) {
    this.id   = id;
    this.nome = nome;
    this.matricula = matricula;
  }
}

module.exports = Aluno;