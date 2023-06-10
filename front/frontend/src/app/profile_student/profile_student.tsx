import Profile from "../global_components/profile";

export default function ProfileStudent({aluno}){
    //variavel de nome
    let name = aluno.name
    let age = aluno.name
    let city = aluno.name
    let state = aluno.name
    let grade = aluno.name

    return(
        <Profile name={name} info1={info1} info2={info2} info3={info3}></Profile>
        
    )
}