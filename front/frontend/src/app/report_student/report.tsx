import Navbar from "../global_components/navbar";
import Call from "../global_components/call"

export default function Report(){
    return(
        <main>
        <div className="mx-5 mt-10">
       <h1 className="font-semibold text-3xl text-zinc-600 ">Fazer denúncia</h1>
       <p className="text-base text-zinc-600">A denúncia é anônima e seus dados serão protegidos.</p>
       </div>
       <p className="text-sm font-semibold text-zinc-600 mt-8 mx-5">Escola:</p>
       <input type="text" className="w-80 h-10 rounded-2xl bg-white drop-shadow-lg p-3 mx-5"/>
       <p className="text-sm font-semibold text-zinc-600 mt-8 mx-5">Aluno:</p>
       <input type="text" className="w-80 h-10 rounded-2xl bg-white drop-shadow-lg p-3 mx-5"/>
       <p className="text-sm font-semibold text-zinc-600 mt-8 mx-5"> Relato:</p>
       <input type="text" className="w-80 h-10 rounded-2xl bg-white drop-shadow-lg p-3 mx-5" />
       <div className="my-20 flex justify-center">
        <button className="button-blue-guardians py-2 p-3">Registrar denúncia</button>
       </div>
       <Call></Call>
       <Navbar></Navbar>
       </main> 
    )
}