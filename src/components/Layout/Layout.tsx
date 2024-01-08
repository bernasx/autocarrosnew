import { Link } from "react-router-dom";
import { ReactNode, useContext } from 'react'
import { BusDataContext } from 'Providers/BusDataProvider'
import { BusDataProviderValue } from "types/types";
import { IoIosRefresh } from "react-icons/io";
import IconButton from "../IconButton/IconButton"
type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children}: Props) => {
  const {busDataFetch} = useContext<BusDataProviderValue>(BusDataContext)

  return (
    <div>
      <div className='flex justify-center align-center mt-2'>
        <Link to='/' className='bg-sky-600 p-2 rounded text-white mr-1 w-32 text-center'>Autocarros</Link>
        <Link to='/lines' className='bg-sky-600 p-2 rounded text-white ml-1 mr-1 w-32 text-center'>Linhas</Link>
        <IconButton className="bg-green-600 p-2 rounded text-white ml-1 w-12 flex justify-center items-center" onClick={busDataFetch} icon={IoIosRefresh} size={20} />
      </div>
      <div className="fit-screen">
        {children}
      </div>
    </div>
  )
}

export default Layout
