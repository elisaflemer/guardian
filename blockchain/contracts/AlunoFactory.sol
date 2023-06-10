// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "./Aluno.sol";

contract AlunoFactory {
    address[] public alunos;
    address public professor;

    event AlunoCriado(address indexed aluno, address indexed criador);

    modifier apenasProfessor() {
        require(msg.sender == professor, "Apenas o professor pode chamar esta funcao.");
        _;
    }

    constructor() {
        professor = msg.sender;
    }

    function criarAluno(string memory nome, uint idade, string memory ano, string memory cidadeNatal, string memory estadoNatal) public apenasProfessor {
        Aluno novoAluno = new Aluno(nome, idade, ano, cidadeNatal, estadoNatal);
        alunos.push(address(novoAluno));
        emit AlunoCriado(address(novoAluno), msg.sender);
    }

    function getAlunos() public view returns (address[] memory) {
        return alunos;
    }
}

