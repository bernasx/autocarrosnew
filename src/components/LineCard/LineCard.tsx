import Bus from "models/Bus"
import { getLineColor } from "utils"
import LineBusTile from "../LineBusTile/LineBusTile"
export interface LineCardProps {
    buses: [Bus] | Bus[],
    lineNumber: string
  }

const LineCard = ({buses, lineNumber}:LineCardProps) => {

    const busDisplay = buses.map(x => <LineBusTile bus={x}/>)

    return (
        <div className={`flex flex-col items-center bg-${getLineColor(lineNumber)} border border-none rounded w-36 pb-2`}>
            <p className="text-white mt-1 text-xl">{`Linha ${lineNumber}`}</p>
            {busDisplay}
        </div>
    )
}

export default LineCard