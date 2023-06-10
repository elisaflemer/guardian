import Image from "next/image"
export default function Card(props:{alerts:boolean, name:string}){

    if (props.alerts == true){
        return(
        <div className="h-14 mx-2 my-3

         bg-zinc-100 rounded-2xl flex flex-row">
            <p className="text-14 text-zinc-700 text-lg w-60 px-5 py-3">{props.name}</p>
        <div className="w-60 flex justify-end px-5">
        <Image src='alert.svg' height={24} width={24} alt ='alert'></Image>
        </div>
        </div>
        )
    }
    else{
        return(
            <div className="h-14 m-2
            bg-zinc-100 rounded-2xl flex flex-row">
               <p className="text-14 text-zinc-700 text-lg w-60 px-5 py-3">{props.name}</p>
           <div className="w-60 flex justify-end px-5">
           <Image src='check.svg' height={24} width={24} alt ='alert'></Image>
           </div>
           </div>
        )
    }

}