export default function NewAlerts({ number, description }) {
  return (
    <div className="mt-2 flex flex-col items-center justify-center gap-2">
      <div className="rounded-2xl w-28 h-28 bg-blue-guardians flex items-center justify-center shadow-lg">
        <h2 className="font-bold text-5xl text-white ">{number}</h2>
      </div>
      <p className="text-zinc-600 text-md text-center w-28">{description}</p>
    </div>
  );
}
