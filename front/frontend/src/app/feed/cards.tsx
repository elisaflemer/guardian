import Image from "next/image";

export default function Card(props: {title:string}) {
    // Adicionar variável
    if (2==2){
        <div className="w-56 h-40 bg-blue-guardians-card">
        <div>
        <Image src='user.svg' width={40} height={40} alt="AI"></Image>
        {/* Adicionar variável */}
        <h2>{props.title}</h2>
        <Image src='alert.svg' width={25} height={30} alt="alert"></Image>
        <button className="text-zinc-500 text-base">X</button>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mollis aliquam ut porttitor leo a diam sollicitudin tempor id.</p>
        </div>
    }
    else{
    return (
        <div className="w-56 h-40 bg-zinc-300">
        </div>
    );
    }
}