import Image from 'next/image'

export default function Card(props:{alert:boolean, description?:string }){
   if(props.alert == true){
      return(
         <div className='mx-10 my-4
         bg-zinc-100 rounded-2xl p-4'>
         <div className=" flex flex-row">
            <p className="font-semibold text-zinc-600 text-lg w-60">Possui histórico</p>
        <div className="w-50 flex justify-end px-5">
        <Image src='alert.svg' height={24} width={24} alt ='alert'></Image>
        </div>
        </div>
        <p className='pt-3 font-normal text_zinc-600 text-sm '>{props.description}</p>
        </div>
)
   }
   else{
   return(
   <div className="flex justify-center m-5">
   <p className="font-semibold text-lg text-zinc-600">Não possui histórico.</p>
   </div>)
   }
}