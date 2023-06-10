const contratoAlunoFactory = artifacts.require("AlunoFactory");
const contratoAluno = artifacts.require("Aluno");
const contratoAgressorVerbal = artifacts.require("AgressorVerbal");
const contratoVitimaVerbal = artifacts.require("VitimaVerbal");
const contratoEpisodioTraumatico = artifacts.require("EpisodioTraumatico");
const contratoDenuncia = artifacts.require("Denuncia");

module.exports = function(deployer) {
    // deployment steps
    const endereçoProfessor = "0x28ab76a0963e8ab8A787613D04c5422F3A6fc8b3";

    deployer.deploy(contratoAlunoFactory);
    // deployer.deploy(contratoAluno, endereçoProfessor);
    deployer.deploy(contratoAgressorVerbal);
    deployer.deploy(contratoVitimaVerbal);
    deployer.deploy(contratoEpisodioTraumatico);
    deployer.deploy(contratoDenuncia);
  };