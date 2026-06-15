import { Outlet, useLocation } from 'react-router-dom'

const PageTransition = () => {
  const location = useLocation()

  return (
    <div key={location.pathname} className="page-transition">
      <Outlet />
    </div>
  )
}

export default PageTransition
