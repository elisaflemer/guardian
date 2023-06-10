'use client'
import { useState } from 'react'
import Image from 'next/image'

export default function Searchbar() {
    const [search, setSearch] = useState('')
    return(
        <main className='w-full'>
            <div className="rounded-lg bg-white drop-shadow-lg text-black flex py-2 items-center justify-between gap-4 px-4">
                <input type="text" placeholder="Pesquisar" value={search} className='w-full focus:outline-none' onChange={(e) => {
                    
                        setSearch(e.target.value)
                }}/>
                <Image src="search.svg" width={20} height={20} alt="search" />
            </div>
        </main>
    )
}