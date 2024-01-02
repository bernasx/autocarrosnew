import { createContext, useState, useEffect } from "react";
import Bus from "models/Bus";
// create context
const BusDataContext = createContext<Bus[]>([]);

const BusDataProvider = ({ children }: any) => {
  // the value that will be given to the context
  const [data, setData] = useState<Bus[]>([]);

  // fetch data
  const busDataFetch = async () => {
    const fetchData = await (
      await fetch(
        'https://broker.fiware.urbanplatform.portodigital.pt/v2/entities?q=vehicleType==bus&limit=1000'
      )
    ).json() as any[]

    if(data) {
      const buses = fetchData.map(x => ({busNumber:x.fleetVehicleId.value, 
        route:decodeURIComponent(x.annotations.value[0]), 
        shift:x.annotations.value[1], 
        travelNumber:x.annotations.value[2], 
        way:x.annotations.value[3], 
        coordinates:x.location.value.coordinates})
        ) as [Bus]

        setData(buses)
    }
  }

  useEffect(() => {
    busDataFetch()
  }, [])

  return (
    // the Provider gives access to the context to its children
    <BusDataContext.Provider value={data}>
      {children}
    </BusDataContext.Provider>
  );
};

export { BusDataContext, BusDataProvider,  };