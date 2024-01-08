import { useContext } from 'react'
import { BusDataContext } from 'Providers/BusDataProvider'
import LineCard from 'components/LineCard/LineCard'
import { BusDataProviderValue } from "types/types";
function Lines() {
    
  const {data:busData} = useContext<BusDataProviderValue>(BusDataContext)
  
  if (busData && busData.length != 0) {
    
    let lines = [...new Set(busData.map(bus => bus.route))].sort((a,b) => (a > b) ? 1 : ((b > a) ? -1 : 0));
    const lineCards = lines.map(x => <LineCard key={x} buses={busData.filter(bus => bus.route === x).sort((a,b) =>(a > b) ? 1 : ((b > a) ? -1 : 0) )} lineNumber={x} />)

    return (
      <div className='w-full flex items-center justify-center mt-4 mb-4'>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-2">
          {lineCards}
        </div>
      </div>
    )
  } else {
    return <div>A carregar dados...</div>
  }

}

export default Lines
