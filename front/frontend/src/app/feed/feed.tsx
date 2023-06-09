import Searchbar from "../global_components/searchbar"
import NewAlerts from "./new_numbers"
import Card from "./cards"
import Navbar from "../global_components/navbar"

export default function Feed() {
// numbers of new alerts
let number1 = 20
let number2 = 10

// Information for the cards
    let titleAlert = "Escola em São Paulo"
    let descriptionAlert = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mollis aliquam ut porttitor leo a diam sollicitudin tempor id."


    return(
        <main>
            <Searchbar></Searchbar>
<div className=" flex justify-center">
<NewAlerts number={number1}></NewAlerts>
<NewAlerts number={number2}></NewAlerts>
</div>
<div className="flex justify-center">
<p className="py-1  text-xs w-6 flex text-center "> Novas denúncias </p>
<div className="w-20"></div>
<p className="py-1  text-xs w-6 flex text-center "> Novos achados </p>
</div>

            <div className="flex justify-center">
                <button className="button-blue-guardians px-10 py-3 mx-10 my-2">Ver perfis de alunos</button>
            </div>     
            <div>
                <h1 className="font-inder text-xl font-inder mx-4 my-5">ALERTAS</h1>
            </div>
            <div>
                <Card title={titleAlert} description={descriptionAlert}></Card>
            </div>
            <div>
                <Card title={titleAlert} description={descriptionAlert}></Card>
            </div>
            <div>
                <Card title={titleAlert} description={descriptionAlert}></Card>
            </div>




<Navbar></Navbar>
        </main>
    )
}
