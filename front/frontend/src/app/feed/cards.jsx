import Image from "next/image";

import AI from "../../../public/ai.svg";

export default function Card({ title, description, type, id }) {
  const denyReport = async () => {
    const result = await fetch(
      "http://localhost:5000/api/reports/verify/" + id,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          aceito: false,
        }),
      }
    );
  };

  const acceptReport = async () => {
    const result = await fetch(
      "http://localhost:5000/api/reports/verify/" + id,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          aceito: true,
        }),
      }
    );
  };

  if ((type = "Denuncia")) {
    return (
      <div className="w-4/5 h-50 bg-blue-guardians-card rounded-2xl mx-10 my-5">
        <div className="flex flex-row justify-between items-center w-full px-2">
          <div className="flex flex-row justify-items-center">
            <Image
              src="user.svg"
              width={35}
              height={35}
              alt="user"
              className="ml-5 mt-2"
            ></Image>
            <h2 className="mt-5 ml-2">{title}</h2>
            <Image
              src={"alert.svg"}
              width={20}
              height={25}
              alt="alert"
              className="ml-5 mt-5"
            ></Image>
          </div>
          <button className="text-zinc-500 text-base ml-4" onClick={denyReport}>
            X
          </button>
        </div>
        <p className="text-xs mt-5 mx-3">{description}</p>
        <div className="flex justify-end">
          <button className="button-blue-guardians px-2 m-2"
          onClick={acceptReport}>
            Registrar denúncia
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="w-4/5 h-50 bg-zinc-300 rounded-2xl mx-10 my-5">
        <div className="flex flex-row justify-items-center align-middle">
          <Image
            src={AI}
            width={35}
            height={35}
            alt="user"
            className="ml-5 mt-2"
          ></Image>
          <h2 className="mt-5 ml-2">{props.title}</h2>
          <Image
            src="alert.svg"
            width={20}
            height={25}
            alt="alert"
            className="ml-5 mt-5"
          ></Image>
          <button className="text-zinc-500 text-base ml-4">X</button>
        </div>
        <p className="text-xs mt-5 mx-3">{props.description}</p>
        <div className="flex justify-end">
          <button className="button-gray-guardians px-2 m-2">
            Registrar achado
          </button>
        </div>
      </div>
    );
  }
}
