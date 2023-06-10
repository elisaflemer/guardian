import Searchbar from "../global_components/searchbar";
import NewAlerts from "./new_numbers";
import Image from "next/image";
import phone from "../../../public/phone.svg";
import Card from "./cards";

export default function Feed() {

    const cards = []
  return (
    <main className="mx-4 mt-5">
      <div className="flex flex-col justify-center items-center w-full">
        <Searchbar></Searchbar>
        <div className="flex flex-col justify-center items-center gap-5">
          <div className="flex justify-center w-full mt-4 gap-5">
            <NewAlerts number={20} description={"Novas denúncias"} />
            <NewAlerts number={3} description={"Novos perfis suspeitos"} />
          </div>
          <button className="rounded-lg bg-blue-guardians flex items-center justify-center shadow-xl text-white text-lg text-center w-full py-1">
            Ver perfis de alunos
          </button>
        </div>
      </div>

      <div className="w-full">
        <h1 className="text-3xl font-inder mt-7 text-purple">ALERTAS</h1>
        <div>
            CARDS
        </div>
      </div>

      <Image src={phone} width={70} height={70} className="absolute right-2 bottom-2 z-10"/>
      
    </main>
  );
}
