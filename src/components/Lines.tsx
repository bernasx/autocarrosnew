import { useEffect, useState } from 'react'
import Bus from "models/Bus"
import LineCard from 'components/LineCard/LineCard'
function Lines() {
    
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
    
    let lines = [...new Set(buses.map(bus => bus.route))].sort((a,b) => (a > b) ? 1 : ((b > a) ? -1 : 0));

    const lineCards = lines.map(x => <LineCard key={x} buses={buses.filter(bus => bus.route === x)} lineNumber={x} />)

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
