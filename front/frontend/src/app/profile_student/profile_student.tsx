import Profile from "../global_components/profile";
import Card from "./card";
import Card2 from "./card2";
import Call from "../global_components/call";
import Navbar from "../global_components/navbar";
import Image from "next/image";

export default function ProfileStudent(){
    //variavel de nome
    let name = 'Fulano ciclano'
    let info1 = 'EMEF Alceu Amoroso Lima'
    let info2 = '9º ano B'
    let info3 = 'São Paulo - SP'
    let alert = true
    let title = 'Advertência'
    let description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    let description2 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    let year = '2021'
    const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}];

    return(
        <main>
        <Profile name={name} info1={info1} info2={info2} info3={info3}></Profile>
        <Card alert={alert} description={description}></Card>
        <h2 className="text-lg text-zinc-600 px-10 font-semibold"> Histórico Acadêmico</h2>
<Image src='chart.svg' height={300} width={300} alt="chart" className="m-5"></Image>
        <Card2 alert={alert} description={description2} title={title} year={year}></Card2>
        <Card2 alert={alert} description={description2} title={title} year={year}></Card2>
        <Call></Call>
        <Navbar></Navbar>
        </main>
    )
}