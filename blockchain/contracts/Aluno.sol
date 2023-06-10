//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "../node_modules/@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol";
import "../node_modules/@openzeppelin/contracts/token/ERC721/IERC721.sol";

contract Aluno is IERC721Receiver {
    address public professor;
    string public nomeAluno;
    uint public idade;
    string public ano;
    string public cidadeNatal;
    string public estadoNatal;

    event infoAlunoAtualizada(address indexed aluno, string nomeAluno, uint idade, string ano, string cidadeNatal, string estadoNatal);

    constructor(string memory _nomeAluno, uint _idade, string memory _ano, string memory _cidadeNatal, string memory _estadoNatal) {
        professor = msg.sender;
        nomeAluno = _nomeAluno;
        idade = _idade;
        ano = _ano;
        cidadeNatal = _cidadeNatal;
        estadoNatal = _estadoNatal;
        emit infoAlunoAtualizada(address(this), nomeAluno, idade, ano, cidadeNatal, estadoNatal);
    }

    modifier onlyProfessor() {
        require(msg.sender == professor, "Somente um professor pode atualizar as informacoes do aluno!");
        _;
    }

    function setNomeAluno(string memory nome) public onlyProfessor {
        nomeAluno = nome;
        emit infoAlunoAtualizada(address(this), nomeAluno, idade, ano, cidadeNatal, estadoNatal);
    }

    function setIdade(uint _idade) public onlyProfessor {
        idade = _idade;
        emit infoAlunoAtualizada(address(this), nomeAluno, idade, ano, cidadeNatal, estadoNatal);
    }

    function setAno(string memory _ano) public onlyProfessor {
        ano = _ano;
        emit infoAlunoAtualizada(address(this), nomeAluno, idade, ano, cidadeNatal, estadoNatal);
    }

    function setCidadeNatal(string memory _cidadeNatal) public onlyProfessor {
        cidadeNatal = _cidadeNatal;
        emit infoAlunoAtualizada(address(this), nomeAluno, idade, ano, cidadeNatal, estadoNatal);
    }

    function setEstadoNatal(string memory _estadoNatal) public onlyProfessor {
        estadoNatal = _estadoNatal;
        emit infoAlunoAtualizada(address(this), nomeAluno, idade, ano, cidadeNatal, estadoNatal);
    }

    event TokenRecebido(address indexed aluno, uint256 tokenId);

    function onERC721Received(address operator, address from, uint256 tokenId, bytes calldata data) external override returns (bytes4) {
        // Verifica se o token está sendo transferido pelo contrato tokenERC721
        // require(msg.sender == address(tokenERC721), "Apenas o contrato tokenERC721 pode chamar a function");

        // Aqui você pode adicionar a lógica para processar o token ERC721 recebido
        // Por exemplo, você pode atualizar o tokenId no contrato Aluno
        tokenId = tokenId;

        // Emitir um evento para indicar que o token foi recebido e processado
        emit TokenRecebido(address(this), tokenId);

        // Retorne o valor mágico esperado para indicar que o contrato aceita tokens ERC721
        return IERC721Receiver.onERC721Received.selector;
    }
}