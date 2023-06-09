import Searchbar from "../global_components/searchbar"
import NewAlerts from "./new_numbers"
import Card from "./cards"


export default function Feed() {
    return(
        <main>
            <Searchbar></Searchbar>
            <div>
                <Card title={"São Paulo"}></Card>
            </div>
            <div>
                <button>Ver perfis de alunos</button>
            </div>
            <div>
                <h1>ALERTAS</h1>
            </div>
           

        </main>
    )
}
