import { Outlet } from 'react-router-dom'
import Topbar from './Topbar'
import Header from './Header'
import Footer from './Footer'
import Copyright from './Copyright'
import { SearchProvider } from './SearchOverlay'

const Layout = () => {
  return (
    <SearchProvider>
      <Topbar />
      <Header />
      <div className="overflow-x-hidden">
        <Outlet />
        <Footer />
        <Copyright />
      </div>
    </SearchProvider>
  )
}

export default Layout
