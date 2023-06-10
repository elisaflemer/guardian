// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Aluno {
    address public professor;
    string public nomeAluno;
    uint public idade;
    string public ano;

    event infoAlunoAtualizada(address indexed aluno, string nomeAluno, uint idade, string ano);

    constructor() {
        professor = msg.sender;
    }

    modifier onlyProfessor() {
        require(msg.sender == professor, "Somente um professor pode atualizar as infos do aluno!");
        _;
    }

    function setNomeAluno(string memory nome) public onlyProfessor {
        nomeAluno = nome;
        emit infoAlunoAtualizada(address(this), nomeAluno, idade, ano);
    }

    function setIdade(uint _idade) public onlyProfessor {
        idade = _idade;
        emit infoAlunoAtualizada(address(this), nomeAluno, idade, ano);
    }

    function setAno(string memory _ano) public onlyProfessor {
        ano = _ano;
        emit infoAlunoAtualizada(address(this), nomeAluno, idade, ano);
    }
}