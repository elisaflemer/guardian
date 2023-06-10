import Image from "next/image"

export default function Profile(props:{name:string, info1:string, info2:string, info3: string}){
    return(
        <main>
            <div className="mx-5 mt-10 flex flex-row">
                <h2 className="text-3xl font-semibold pl-5 ">{props.name}</h2>
                <div className="w-1/3 flex justify-end">
                <Image src='user.svg' alt="user" width={50} height={50} className="m-30"></Image>
                </div>
            </div>
            <div className="ml-10">
                <p>{props.info1}</p>
                <p>{props.info2}</p>
                <p>{props.info3}</p>
            </div>
        </main>
    )
}