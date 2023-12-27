import Bus from "models/Bus"
export interface LineCardProps {
    buses: [Bus] | Bus[],
    lineNumber: string
  }

const LineCard = ({buses, lineNumber}:LineCardProps) => {

    const busDisplay = buses.map(x => <div>{x.busNumber}</div>)

    return (
        <div className="flex flex-col items-center bg-sky-400 border border-none rounded w-32">
            <p className="text-white">{`Linha ${lineNumber.slice(11,14)}`}</p>
            {busDisplay}
        </div>
    )
}

export default LineCard