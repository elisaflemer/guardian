export default function NewAlerts(props: {number:number}) {
return(
<div>
    <div className="rounded-md w-20  h-20 bg-blue-guardians mx-5 my-2">
        <p className="h-full text-5xl text-white font-semibold text-center align-baseline">{props.number}</p>
    </div>
    <p className="text-zinc-600 text-xs"></p>
</div>
)
}