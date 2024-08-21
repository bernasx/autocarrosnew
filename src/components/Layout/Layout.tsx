import { Link } from "react-router-dom";
import { ReactNode, useReducer, useContext, useRef } from 'react'
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
  const isButtonDisabledRef = useRef(false);
  const [, forceUpdate] = useReducer((x) => x + 1, 0);


  const handleButtonClick = () => {
    if (!isButtonDisabledRef.current) {
      isButtonDisabledRef.current = true;
      busDataFetch();

      // Enable the button after 5 seconds
      setTimeout(() => {
        isButtonDisabledRef.current = false;
        forceUpdate()
      }, 5000);
    }
  };

  return (
    <div>
      <div className='flex justify-center align-center mt-2'>
        <Link to='/' className='bg-slate-500 p-2 rounded text-white mr-1 w-32 text-center'>Autocarros</Link>
        <Link to='/lines' className='bg-slate-500 p-2 rounded text-white ml-1 mr-1 w-32 text-center'>Linhas</Link>
        <Link to='/rares' className='bg-slate-500 p-2 rounded text-white ml-1 mr-1 w-32 text-center'>Raridades</Link>
        <IconButton
          className={`bg-slate-700 p-2 rounded text-white ml-1 w-12 flex justify-center items-center ${
            isButtonDisabledRef.current ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          onClick={handleButtonClick}
          icon={IoIosRefresh}
          size={20}
        />
      </div>
      <div className="fit-screen">
        {children}
      </div>
    </div>
  )
}

export default Layout
