import Navbar from "../global_components/navbar";
import Searchbar from "../global_components/searchbar";
import Card from "./card";
import Call from "../global_components/call";

export default function Table(){
let alert = true
let name = 'Fulano Ciclano'

    return(
    <main className="h-screen">
        <Searchbar></Searchbar>
        <Card alerts={alert} name={name}></Card>
        <Card alerts={false} name={name}></Card>
        <Card alerts={alert} name={name}></Card>
        <Card alerts={false} name={name}></Card>
        <Card alerts={alert} name={name}></Card>
        <Navbar></Navbar>
        <Call></Call>
    </main>
    )
}