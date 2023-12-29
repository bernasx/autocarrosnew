import App from 'components/App'
import { Link } from "react-router-dom";
import { ReactNode } from 'react'
type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'Portfolio' }: Props) => {
  return (
    <div>
      <div className='flex justify-center align-center mt-2'>
        <Link to='/' className='bg-sky-600 p-2 rounded text-white mr-1 w-16 text-center'>Home</Link>
        <Link to='/lines' className='bg-sky-600 p-2 rounded text-white ml-1 w-16 text-center'>Lines</Link>
      </div>
      <div className="fit-screen">
        {children}
      </div>
    </div>
  )
}

export default Layout
