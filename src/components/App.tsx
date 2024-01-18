import { ChangeEvent, useContext, useState } from 'react'
import { BusDataContext } from 'Providers/BusDataProvider'
import BusTile from 'components/BusTile/BusTile'
import LoadingSpinner from './LoadingSpinner/LoadingSpiner';
import { BusDataProviderValue } from "types/types";
function App() {
 
  const {data:fetchedBusData} = useContext<BusDataProviderValue>(BusDataContext)
  const [search, setSearch] = useState("")

  if (fetchedBusData && fetchedBusData.length != 0) {

    const busData = [... fetchedBusData]
    
    const buses = busData.sort((a,b) => (a.busNumber > b.busNumber) ? 1 : ((b.busNumber > a.busNumber) ? -1 : 0)).filter(x => x.busNumber.includes(search))
    const busTiles = buses.map(x => <BusTile key={x.busNumber + x.route} bus={x} />)

    const handleSearch = (e:ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value)
  }
    
    return (
      <div className='w-full flex flex-col items-center justify-center mt-4 mb-4'>
        <input type='number' placeholder='Pesquisar por autocarros' className='sm:w-full lg:w-1/3 h-8 mt-2 mb-2 p-1 border border-gray-300 rounded-md focus:outline-none focus:border-slate-500 focus:ring focus:ring-slate-200'
        onChange={handleSearch}></input>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-2">
          {busTiles}
        </div>
      </div>
    )
  } else {
    return <LoadingSpinner/>
  }

}

export default App
