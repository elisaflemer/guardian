import Navbar from "../global_components/navbar"
import Profile from "../global_components/profile"
import Call from "../global_components/call"

export default function ProfileUser() {
    let name = 'Fulano ciclano'
    let info1 = 'EMEF Alceu Amoroso Lima'
    let info2 = 'Pedagogo Geral'
    let info3 = 'São Paulo - SP'
    return (
        <main>
        <Profile name={name} info1={info1} info2={info2} info3={info3}></Profile>
        <div className="flex justify-center mt-10">
        <button className="h-10 w-2/3 button-blue-guardians "> Editar perfil</button>
        </div>
        <Call></Call>
        <Navbar></Navbar>
        </main>
    )
}