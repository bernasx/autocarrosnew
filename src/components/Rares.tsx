import { useContext } from 'react'
import { BusDataContext } from 'Providers/BusDataProvider'
import LoadingSpinner from './LoadingSpinner/LoadingSpiner';
import LineCard from 'components/LineCard/LineCard'
import { BusDataProviderValue, RareLine } from "types/types";
import Buslines from "buslines.json"
function Rares() {
    
  const {data:busData} = useContext<BusDataProviderValue>(BusDataContext)
  
  if (busData && busData.length != 0) {

    const rareLines = Buslines as RareLine
    const lines = [...new Set(busData.map(bus => bus.route))]
    .sort((a,b) => (a > b) ? 1 : ((b > a) ? -1 : 0));
    
    const lineCards = lines.map(x => <LineCard key={x} buses={busData
            .filter( bus => (bus.route === x) && !(rareLines[x]?.includes(bus.busNumber)))
            .sort((a,b) =>(a > b) ? 1 : ((b > a) ? -1 : 0) )} 
            lineNumber={x} 
        />)
        .filter(card => card.props.buses.length > 0)


    return (
      <div className='w-full flex items-center justify-center mt-4 mb-4'>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-2">
          {lineCards}
        </div>
      </div>
    )
  } else {
    return <LoadingSpinner/>
  }

}

export default Rares
