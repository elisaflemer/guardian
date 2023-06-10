//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// Esses imports são necessários para o contrato funcionar
import "../node_modules/@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol";
import "../node_modules/@openzeppelin/contracts/token/ERC721/IERC721.sol";

// Contrato base do factory, que é o template que cria os contratos personalizados para cada aluno
contract Aluno is IERC721Receiver {
    // Variáveis que guardam as informações do aluno
    address public professor;
    string public nomeAluno;
    uint public idade;
    string public ano;
    string public cidadeNatal;
    string public estadoNatal;

    // Evento que atualiza as informações do aluno em blockchain
    event infoAlunoAtualizada(address indexed aluno, string nomeAluno, uint idade, string ano, string cidadeNatal, string estadoNatal);

    // Construtor do contrato
    constructor(string memory _nomeAluno, uint _idade, string memory _ano, string memory _cidadeNatal, string memory _estadoNatal) {
        professor = msg.sender;
        nomeAluno = _nomeAluno;
        idade = _idade;
        ano = _ano;
        cidadeNatal = _cidadeNatal;
        estadoNatal = _estadoNatal;
        emit infoAlunoAtualizada(address(this), nomeAluno, idade, ano, cidadeNatal, estadoNatal);
    }

    // Modifier que cria a condição de ser professor para executar as funções
    modifier onlyProfessor() {
        require(msg.sender == professor, "Somente um professor pode atualizar as informacoes do aluno!");
        _;
    }

    // Função que seta o nome do aluno para atualização de informação
    function setNomeAluno(string memory nome) public onlyProfessor {
        nomeAluno = nome;
        emit infoAlunoAtualizada(address(this), nomeAluno, idade, ano, cidadeNatal, estadoNatal);
    }

    // Função que seta a idade do aluno para atualização de informação
    function setIdade(uint _idade) public onlyProfessor {
        idade = _idade;
        emit infoAlunoAtualizada(address(this), nomeAluno, idade, ano, cidadeNatal, estadoNatal);
    }

    // Função que seta o ano da escola do aluno para atualização de informação
    function setAno(string memory _ano) public onlyProfessor {
        ano = _ano;
        emit infoAlunoAtualizada(address(this), nomeAluno, idade, ano, cidadeNatal, estadoNatal);
    }

    // Função que seta a cidade natal do aluno para atualização de informação
    function setCidadeNatal(string memory _cidadeNatal) public onlyProfessor {
        cidadeNatal = _cidadeNatal;
        emit infoAlunoAtualizada(address(this), nomeAluno, idade, ano, cidadeNatal, estadoNatal);
    }

    // Função que seta o estado natal do aluno para atualização de informação
    function setEstadoNatal(string memory _estadoNatal) public onlyProfessor {
        estadoNatal = _estadoNatal;
        emit infoAlunoAtualizada(address(this), nomeAluno, idade, ano, cidadeNatal, estadoNatal);
    }

    // Evento para registrar a emissão de NFTs para o respectivo aluno
    event TokenRecebido(address indexed aluno, uint256 tokenId);

    // Função que emite o evento do recebimento da NFT
    function onERC721Received(address operator, address from, uint256 tokenId, bytes calldata data) external override returns (bytes4) {
        tokenId = tokenId;

        // Emitir um evento para indicar que o token foi recebido e processado
        emit TokenRecebido(address(this), tokenId);

        return IERC721Receiver.onERC721Received.selector;
    }
}