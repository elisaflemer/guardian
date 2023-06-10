import Image from "next/image";

export default function Card(props: {title:string, description:string}) {
    let typeFont = 'Denuncia'


    if (typeFont= 'Denuncia'){
        return(
        <div className="w-4/5 h-50 bg-blue-guardians-card rounded-2xl mx-10 my-5">
        <div className="flex flex-row justify-items-center align-middle">
        <Image src='user.svg' width={35} height={35} alt="user" className="ml-5 mt-2"></Image>
        <h2 className="mt-5 ml-2">{props.title}</h2>
        <Image src='alert.svg' width={20} height={25} alt="alert" className="ml-5 mt-5"></Image>
        <button className="text-zinc-500 text-base ml-4">X</button>
        </div>
        <p className="text-xs mt-5 mx-3">{props.description}</p>
        <div className="flex justify-end">
        <button className="button-blue-guardians px-2 m-2">Registrar denúncia</button>
        </div>

        </div>);
    }
    else{
    return (
        <div className="w-4/5 h-50 bg-zinc-300 rounded-2xl mx-10 my-5">
        <div className="flex flex-row justify-items-center align-middle">
        <Image src='user.svg' width={35} height={35} alt="user" className="ml-5 mt-2"></Image>
        <h2 className="mt-5 ml-2">{props.title}</h2>
        <Image src='alert.svg' width={20} height={25} alt="alert" className="ml-5 mt-5"></Image>
        <button className="text-zinc-500 text-base ml-4">X</button>
        </div>
        <p className="text-xs mt-5 mx-3">{props.description}</p>
        <div className="flex justify-end">
        <button className="button-gray-guardians px-2 m-2">Registrar achado</button>
        </div>
        </div>
    )
    }
}