import Image from 'next/image';
import ConnectWallet from './connectWallet';
import Link from 'next/link';
export default function Login() {
    return (
        <main className='m-0 h-screen'>
            <div className="flex items-center h-2/5 flex-col w-screen mt-24 ">
            <Image src = 'Logo.svg' width={150} height={150} alt="Logo"/>
            <h2 className="font-inder text-lg font-inder">Hack4Change</h2>
            </div>
            <div className="bg-zinc-300 rounded-tl-full h-3/5 p-11 static">
                    <div className="flex items-center justify-center"> 
                    <h2 className="center font-inder text-xl font-inder mt-10 mb-5 font-extrabold">LOGIN</h2></div> 
                    <div className="flex flex-col items-center justify-center">
                <ConnectWallet></ConnectWallet>
                <Link className='button-blue-guardians py-1 px-2 w-4/5 text-center' href='/report_student'>Fazer uma denúncia</Link>
                </div>
            </div>
        </main>
    );
}