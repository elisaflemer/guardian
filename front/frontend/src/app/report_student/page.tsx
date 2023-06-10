'use client'

import Navbar from "../global_components/navbar";
import Call from "../global_components/call";
import { useState } from "react";

export default function Report() {

  const [school, setSchool] = useState("");
  const [student, setStudent] = useState("");
  const [report, setReport] = useState("");

  const submitReport = async () => {
    let result = await fetch("http://localhost:5000/api/report", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        escola: school,
        alunoNome: student,
        alunoEndereco: '',
        relato: report,
        verificado: false,
        aceito: false
      }),
    });
    console.log(result);
  }

  return (
    <main>
      <div className="mx-5 mt-10">
        <h1 className="font-semibold text-3xl text-zinc-600 ">
          Fazer denúncia
        </h1>
        <p className="text-base text-zinc-600">
          A denúncia é anônima e seus dados serão protegidos.
        </p>
      </div>
      <p className="text-sm font-semibold text-zinc-600 mt-8 mx-5">Escola:</p>
      <input
        type="text"
        value = {school}
        onChange = {(e) => setSchool(e.target.value)}
        className="w-80 h-10 rounded-2xl bg-white drop-shadow-lg p-3 mx-5"
      />
      <p className="text-sm font-semibold text-zinc-600 mt-8 mx-5">Aluno:</p>
      <input
        type="text"
        value = {student}
        onChange = {(e) => setStudent(e.target.value)}

        className="w-80 h-10 rounded-2xl bg-white drop-shadow-lg p-3 mx-5"
      />
      <p className="text-sm font-semibold text-zinc-600 mt-8 mx-5"> Relato:</p>
      <input
        type="text"
        value = {report}
        onChange = {(e) => setReport(e.target.value)}
        className="w-80 h-10 rounded-2xl bg-white drop-shadow-lg p-3 mx-5"
      />
      <div className="my-20 flex justify-center">
        <button className="button-blue-guardians py-2 p-3"
        onClick={submitReport}>
          Registrar denúncia
        </button>
      </div>
      <Call></Call>
      <Navbar></Navbar>
    </main>
  );
}
