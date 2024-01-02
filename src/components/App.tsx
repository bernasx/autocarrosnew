import { useContext } from 'react'
import { BusDataContext } from 'Providers/BusDataProvider'
import BusTile from 'components/BusTile/BusTile'
import Bus from "models/Bus"

function App() {
 
  const busData = useContext<Bus[]>(BusDataContext)

  if (busData) {
    
    const buses = busData.sort((a,b) => (a.busNumber > b.busNumber) ? 1 : ((b.busNumber > a.busNumber) ? -1 : 0))
    const busTiles = buses.map(x => <BusTile key={x.busNumber + x.route} bus={x} />)
    
    return (
      <div className='w-full flex items-center justify-center mt-4 mb-4'>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-2">
          {busTiles}
        </div>
      </div>
    )
  } else {
    return <div>A carregar dados...</div>
  }

}

export default App
