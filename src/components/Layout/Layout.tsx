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
      <Link to='/'>Home</Link>
      <Link to='/lines'>Lines</Link>
      <div className="fit-screen">
        {children}
        <footer className="bg-port-dark-green dark:bg-port-darker-blue w-full min-h-8 h-auto"></footer>
      </div>
    </div>
  )
}

export default Layout
