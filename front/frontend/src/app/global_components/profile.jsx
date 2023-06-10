'use client'

import Image from "next/image";
import { ethers } from "ethers";
import Aluno from "../../../contracts/Aluno.json";
import { useState, useEffect } from "react";
import Navbar from "./navbar";

export default function Profile({ address }) {
  const [data, setData] = useState({});
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  useEffect(() => {
    const alunoABI = Aluno.abi;
    const getStudentData = async () => {
      const alunoContract = new ethers.Contract(
        address,
        alunoABI,
        signer
      );
      let name = await alunoContract.nomeAluno();
      let age = await alunoContract.idade();
      let grade = await alunoContract.ano();
      let city = await alunoContract.cidadeNatal();
      let state = await alunoContract.estadoNatal();

      setData({
        Nome: name,
        Idade: age,
        Série: grade,
        Cidade: city,
        Estado: state,
        Endereço: address,
      });
    };
    if (typeof window.ethereum !== "undefined") {
      getStudentData();
    }
  });

  return (
    <main className="flex flex-col justify-center w-full ">
      <div className="mt-10 px-10 flex flex-row w-full items-center justify-between">
        <h2 className="text-3xl font-semibold ">{data.Nome}</h2>
        <div className=" flex justify-end">
          <Image
            src="user.svg"
            alt="user"
            width={50}
            height={50}
            className="m-30"
          ></Image>
        </div>
      </div>
      <div className="px-10">
        <h2 className="text-2xl font-semibold mt-5">Informações</h2>
        {Object.keys(data).map((key) => {
            console.log(key);
            console.log(data[key])
            return (
                <div className="flex flex-row">
                <h3 className="text-lg font-semibold">{key}: {data[key].toString()}</h3>
                </div>
            );
        })}
      </div>
      <Navbar />
    </main>
  );
}
