import { useEffect, useState } from 'react'
import BusTile from 'components/BusTile/BusTile'
import Bus from "models/Bus"

function App() {
 
  const [data, setData] = useState<[any]>()
  useEffect(() => {
    // fetch data
    const dataFetch = async () => {
      const data = await (
        await fetch(
          'https://broker.fiware.urbanplatform.portodigital.pt/v2/entities?q=vehicleType==bus&limit=1000'
        )
      ).json()

      // set state when the data received
      // note this is not ideal
      setData(data)
    }

    dataFetch()
  }, [])

  if (data) {
    
    let buses = data.map(x => ({busNumber:x.fleetVehicleId.value, 
      route:decodeURIComponent(x.annotations.value[0]), 
      shift:x.annotations.value[1], 
      travelNumber:x.annotations.value[2], 
      way:x.annotations.value[3], 
      coordinates:x.location.value.coordinates})
      ) as [Bus]
    
    
    buses = buses.sort((a,b) => (a.busNumber > b.busNumber) ? 1 : ((b.busNumber > a.busNumber) ? -1 : 0))
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
