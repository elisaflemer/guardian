import Link from 'next/link';

export default function Navbar() {
    return (
        <div className="fixed bottom-0 w-screen flex justify-around bg-white rounded-lg shadow-top h-16 py-3">
            <button>
              <Link href="/add"/>
              <img src="add.svg" alt="add" />
            </button>
            <Link href="/feed">
                <button><img src="home.svg" alt="home" /></button>
            </Link>
            <Link href="/add">
                <button><img src="usernav.svg" alt="user_navbar" /></button>
            </Link>
        </div>
    );
}