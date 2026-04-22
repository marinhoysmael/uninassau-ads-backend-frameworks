
const Aluno = require('../models/aluno');

const {Service } = require('../../framework/decorators');

class AlunoService {
    constructor() {
        this.alunos = [
            new Aluno(1, 'João Silva', "202601"),
            new Aluno(2, 'Maria Oliveira', "202602"),
            new Aluno(3, 'Carlos Pereira', "202603")
        ];
    }

    getAllAlunos() {
        return this.alunos;
    }

    getAlunoById(id) {
       
        const aluno = this.alunos.find(a => a.id === parseInt(id));
        if (!aluno) {
            throw new Error('Aluno não encontrado');
        }
        return aluno;
    }
}

Service(AlunoService);

module.exports = AlunoService;