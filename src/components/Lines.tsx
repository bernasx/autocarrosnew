import { ChangeEvent, useContext, useState } from 'react'
import { BusDataContext } from 'Providers/BusDataProvider'
import LineCard from 'components/LineCard/LineCard'
import LoadingSpinner from './LoadingSpinner/LoadingSpiner';
import { BusDataProviderValue } from "types/types";
function Lines() {

  const [search, setSearch] = useState("")
  const {data:fetchedBusData} = useContext<BusDataProviderValue>(BusDataContext)
  
  if (fetchedBusData && fetchedBusData.length != 0) {

    const busData = [... fetchedBusData]
    
    let lines = [...new Set(busData.map(bus => bus.route))].sort((a,b) => (a > b) ? 1 : ((b > a) ? -1 : 0)).filter(x => x.includes(search));
    const lineCards = lines.map(x => <LineCard key={x} buses={busData.filter(bus => bus.route === x).sort((a,b) =>(a > b) ? 1 : ((b > a) ? -1 : 0) )} lineNumber={x} />)

    const handleSearch = (e:ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }
  
    return (
      <div className='w-full flex flex-col items-center justify-center mt-4 mb-4'>
        <input type='number' placeholder='Pesquisar por linhas' className='sm:w-full lg:w-1/3 h-8 mt-2 mb-2 p-1 border border-gray-300 rounded-md focus:outline-none focus:border-slate-500 focus:ring focus:ring-slate-200'
        onChange={handleSearch}></input>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-2">
          {lineCards}
        </div>
      </div>
    )
  } else {
    return <LoadingSpinner/>
  }

}

export default Lines
