'use client'
import { useEffect, useState } from "react";
import Profile from "../global_components/profile";

export default function ProfileStudent(){
    const [studentAddress, setStudentAddress] = useState("");
    useEffect(() => {
        // Perform localStorage action
        const item = localStorage.getItem('chosenStudent')
        setStudentAddress(item)
      }, [])

    return(
        <Profile address={studentAddress}></Profile>
    )
}