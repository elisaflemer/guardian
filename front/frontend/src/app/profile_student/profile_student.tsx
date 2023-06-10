import Profile from "../global_components/profile";

export default function ProfileStudent(){
    //variavel de nome
    let name = 'Fulano ciclano'
    let info1 = 'EMEF Alceu Amoroso Lima'
    let info2 = '9º ano B'
    let info3 = 'São Paulo - SP'

    return(
        <Profile name={name} info1={info1} info2={info2} info3={info3}></Profile>
        
    )
}