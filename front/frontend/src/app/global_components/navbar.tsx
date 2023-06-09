export default function Navbar() {
    return (
        <div className="fixed bottom-0 w-screen flex justify-around bg-white rounded-lg shadow-top h-16 py-3">
            <button><img src="add.svg" alt="add" /></button>
            <button><img src="home.svg" alt="home" /></button>
            <button><img src="usernav.svg" alt="user_navbar" /></button>
        </div>
    );
}