import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './Components/ScrollToTop'
import ScrollToTopOnNavigate from './Components/ScrollToTopOnNavigate'
import Layout from './Components/Layout'
import Homepage from './Pages/Homepage'
import About from './Pages/About'
import Team from './Pages/Team'
import Events from './Pages/Events'
import FAQS from './Pages/FAQS'
import Gallery from './Pages/Gallery'
import Contact from './Pages/Contact'

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTopOnNavigate />
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/events" element={<Events />} />
          <Route path="/faq" element={<FAQS />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App