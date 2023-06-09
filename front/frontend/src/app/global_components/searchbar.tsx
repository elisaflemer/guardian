import Image from 'next/image'
export default function Searchbar() {
    return(
        <main>
            <div className='my-10 mx-2'>
            <div className='grid justify-items-end'> <Image src="search.svg" width={15} height={20} alt="search" className='absolute z-10 mt-5 mr-5'/>
                <input type="text" placeholder="Pesquisar" className='w-full h-10 rounded-2xl bg-white drop-shadow-lg h-10 p-3'/>
</div>
            </div>
        </main>
    )
}