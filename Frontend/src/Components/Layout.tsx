import { Outlet } from 'react-router-dom'
import Topbar from './Topbar'
import Header from './Header'
import Footer from './Footer'
import Copyright from './Copyright'
import { SearchProvider } from './SearchOverlay'

const Layout = () => {
  return (
    <SearchProvider>
      <div className="overflow-x-hidden">
        <Topbar />
        <Header />
        <Outlet />
        <Footer />
        <Copyright />
      </div>
    </SearchProvider>
  )
}

export default Layout
