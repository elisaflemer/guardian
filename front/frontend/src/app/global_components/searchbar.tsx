import Image from 'next/image'
export default function Searchbar() {
    return(
        <main>
            <div className="rounded-2xl bg-white drop-shadow-lg">
                <input type="text" placeholder="Pesquisar"/>
                <Image src="search.svg" width={120} height={400} alt="search" />
            </div>
        </main>
    )
}