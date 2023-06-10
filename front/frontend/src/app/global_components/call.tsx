import Image from "next/image"
export default function call(){
    return(
        <div className="fixed bottom-5 w-screen flex justify-end my-20 pr-5 z-30">
            <div>
                <button className="h-20 w-20 bg-blue-guardians rounded-full flex justify-center p-6">
                    <Image src='call.svg' width={30} height={30} alt="call"></Image>
                </button>
        </div>
        </div>
    )
}