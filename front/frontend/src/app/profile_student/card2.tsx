export default function Card2(props:{alert:boolean, description?:string, title?:string, year?:string}) {
    if(props.alert == true){
        return(
           <div className='mx-10 my-4
           bg-zinc-100 rounded-2xl p-4'>
           <div className=" flex flex-row">
              <p className="font-semibold text-zinc-600 text-lg w-60">{props.title}</p>
              <p className="text-xs text-zinc-600 flex justify-end">{props.year}</p>
          </div>
          <p className='pt-3 font-normal text_zinc-600 text-sm '>{props.description}</p>
          </div>
  )
     }
     else{
     return(
     <div className="flex justify-center m-5">
     <p className="font-semibold text-lg text-zinc-600">Não possui advertências.</p>
     </div>)
     }
}