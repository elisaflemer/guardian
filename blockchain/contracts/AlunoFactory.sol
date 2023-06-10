// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "./Aluno.sol";

// Esse contrato é um gerador de contratos filhos destinados as informações dos alunos
contract AlunoFactory {
    // Variaveis para armazenar endereço dos alunos e dos respectivos professores
    address[] public alunos;
    address public professor;

    // Evento de criação de um aluno em blockchain
    event AlunoCriado(address indexed aluno, address indexed criador);

    // Modifier que cria a condição de ser professor para executar as funções
    modifier apenasProfessor() {
        require(msg.sender == professor, "Apenas o professor pode chamar esta funcao.");
        _;
    }

    // Construtor do contrato Factory
    constructor() {
        professor = msg.sender;
    }

    // Função de criar aluno, emitindo o evento de fato na blockchain e puxando o endereço do contrato criado para o array
    function criarAluno(string memory nome, uint idade, string memory ano, string memory cidadeNatal, string memory estadoNatal) public apenasProfessor {
        Aluno novoAluno = new Aluno(nome, idade, ano, cidadeNatal, estadoNatal);
        alunos.push(address(novoAluno));
        emit AlunoCriado(address(novoAluno), msg.sender);
    }

    // Função que puxa o endereço de todos os contratos de aluno
    function getAlunos() public view returns (address[] memory) {
        return alunos;
    }
}

