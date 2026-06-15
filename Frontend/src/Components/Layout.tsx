import Topbar from './Topbar'
import Header from './Header'
import Footer from './Footer'
import Copyright from './Copyright'
import { SearchProvider } from './SearchOverlay'
import { JoinFormProvider } from './JoinFormModal'
import { ScrollRevealProvider } from './ScrollReveal'
import PageTransition from './PageTransition'

const Layout = () => {
  return (
    <SearchProvider>
      <JoinFormProvider>
        <ScrollRevealProvider>
          <Topbar />
          <Header />
          <div className="overflow-x-hidden">
            <PageTransition />
            <Footer />
            <Copyright />
          </div>
        </ScrollRevealProvider>
      </JoinFormProvider>
    </SearchProvider>
  )
}

export default Layout
