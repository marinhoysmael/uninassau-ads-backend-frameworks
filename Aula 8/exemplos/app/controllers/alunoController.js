
const { Injectable, Controller } = require('../../framework/decorators');

class AlunoController {

    constructor(alunoService) {
        this.alunoService = alunoService;
    }

    list(req, res) {
        const alunos = this.alunoService.getAllAlunos();
        return alunos;
    }

    getById(req, res) {
    try {

      const id = req.params && req.params.id
        ? req.params.id
        : req.path.split('/').pop();

      const aluno = this.alunoService.getAlunoById(id);
      return aluno;
    } catch (err) {
      res.status(404).json({ error: err.message });
    }
  }

}


Controller([
    { method: 'GET', path: '/alunos', handler: 'list' },
    { method: 'GET', path: '/alunos/:id', handler: 'getById'}
])(AlunoController);

Injectable(['AlunoService'])(AlunoController);

module.exports = AlunoController;