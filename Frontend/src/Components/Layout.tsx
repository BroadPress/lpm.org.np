import { Outlet } from 'react-router-dom'
import Topbar from './Topbar'
import Header from './Header'
import Footer from './Footer'
import Copyright from './Copyright'

const Layout = () => {
  return (
    <>
      <Topbar />
      <Header />
      <Outlet />
      <Footer />
      <Copyright />
    </>
  )
}

export default Layout
