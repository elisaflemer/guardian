"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { ethers } from "ethers";
import Aluno from "../../../contracts/Aluno.json";
import AlunoFactory from "../../../contracts/AlunoFactory.json";

export default function Searchbar({setFilteredData, setSearching, data, setData}) {

  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  useEffect(() => {
    const alunoABI = Aluno.abi;
    const alunoFactoryABI = AlunoFactory.abi;
    let fetched = [];
    const getStudents = async () => {
      const alunoFactoryContract = new ethers.Contract(
        "0x716ac286aE3D50a8452e2067597Dd9F822ba575d",
        alunoFactoryABI,
        signer
      );
      const alunoAddresses = await alunoFactoryContract.getAlunos();

      for (let i = 0; i < alunoAddresses.length; i++) {
        const contractAddress = alunoAddresses[i];
        const alunoContract = new ethers.Contract(
          contractAddress,
          alunoABI,
          signer
        );
        let name = await alunoContract.nomeAluno();
        let age = await alunoContract.idade();
        let grade = await alunoContract.ano();
        let city = await alunoContract.cidadeNatal();
        let state = await alunoContract.estadoNatal();

        fetched.push({
          id: i,
          aluno: {
            name: name,
            age: age,
            grade: grade,
            city: city,
            state: state,
            address: contractAddress,
          },
        });
      }

      fetched.sort((a, b) => a.name - b.name);

      setData(fetched);
    };
    if (typeof window.ethereum !== "undefined") {
      getStudents();
      console.log(data);
    }
  });

  const [search, setSearch] = useState("");
  return (
    <main className="w-full">
      <div className="rounded-lg bg-white drop-shadow-lg text-black flex py-2 items-center justify-between gap-4 px-4">
        <input
          type="text"
          placeholder="Pesquisar"
          value={search}
          className="w-full focus:outline-none"
          onChange={(e) => {
            setSearch(e.target.value);
            if (e.target.value === "") {
              setSearching(false);
            }
          }}
        />
        <Image src="search.svg" width={20} height={20} alt="search" onClick={() => {
          setSearching(true)
          setFilteredData(data.filter((item) => item.aluno.name.toLowerCase().includes(search.toLowerCase())));
        }} />
      </div>
    </main>
  );
}
