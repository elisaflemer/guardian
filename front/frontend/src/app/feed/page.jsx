"use client";

import Searchbar from "../global_components/searchbar";
import NewAlerts from "./new_numbers";
import Image from "next/image";
import phone from "../../../public/phone.svg";
import Card from "./cards";
import Navbar from "../global_components/navbar";
import { useRouter } from 'next/navigation'


import { useState, useEffect } from "react";

export default function Feed() {
  const [reports, setReports] = useState([]);
  const router = useRouter()

  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searching, setSearching] = useState(false);

  useEffect(() => {
    const getReports = async () => {
      const response = await fetch(
        "http://localhost:5000/api/reports"
      );
      const resp = await response.json();
      setReports(resp.data.filter((item) => item.verificado === false))
    }
      getReports();})
  return (
    <main className="mx-4 mt-5">
      <div className="flex flex-col justify-center items-center w-full">
        <Searchbar
          setFilteredData={setFilteredData}
          setSearching={setSearching}
          data = {data}
          setData = {setData}
        ></Searchbar>
        {searching ? (
          <div className="flex flex-col justify-center items-center w-full">
            <div>
              {filteredData.map((item) => (
                <div
                className="h-14 mx-2 my-3 bg-zinc-100 rounded-2xl flex flex-row cursor-pointer"
                onClick={() => {
                  localStorage.setItem("chosenStudent", item.aluno.address);
                  router.push('/profile_student')
                }}
              >
                <p className="text-14 text-zinc-700 text-lg w-60 px-5 py-3">
                  {item.aluno.name}
                </p>

              </div>
              ))}
            </div>
          </div>
        ) : (
          <>
            <div className="flex flex-col justify-center items-center gap-5">
              <div className="flex justify-center w-full mt-4 gap-5">
                <NewAlerts number={reports.length} description={"Novas denúncias"} />
                <NewAlerts number={3} description={"Novos perfis suspeitos"} />
              </div>
              <button className="rounded-lg bg-blue-guardians flex items-center justify-center shadow-xl text-white text-lg text-center w-full py-1" onClick={() => {
                setSearching(true)
                setFilteredData(data);
              }}>
                Ver perfis de alunos
              </button>
            </div>
            <div className="w-full mb-16">
              <h1 className="text-3xl font-inder mt-7 text-purple ">ALERTAS</h1>
              <div>
                {reports.map((item) => (
                  <Card title={item.alunoNome}
                  description={item.relato}
                  type={'Denuncia'}
                  id={item._id}/>
                ))}
                <Card title={"Marcela Ferraz - Twitter"}
                  description={'Seu argumento é tão fraco que é melhor calar a boca antes de envergonhar a si mesmo e a todos ao seu redor'}
                  type={''}
                  id={0}/>
              </div>
            </div>
          </>
        )}
      </div>

      <Image
        src={phone}
        width={70}
        height={70}
        className="absolute right-2 bottom-2 z-10"
      />

  <Navbar></Navbar>
    </main>
  );
}
