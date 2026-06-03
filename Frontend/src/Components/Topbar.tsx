import React from 'react'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

const Topbar = () => {
  return (
    <header className="bg-white text-white-sm">
        <div className="mx-auto flex max-w-7x1 flex-wrap items-center justify-between gap-3 px-4 py-2">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">

                        <a href="tele:+977 9841441374" className="flex items-center gap-2 hover:opacity-80">
                            <FaPhoneAlt className="shrink-0 text-xs"/>
                            <span>+977 9841441374</span>
                        </a>

                        <a href="email" className="flex items-center gap-2 hover:opacity-80">
                            <FaEnvelope className="shrink-0 text-xs"/>
                             <span>info@lpm.org.np</span>
                        </a>

                         <a href="location" className="flex items-center gap-2 hover:opacity-80">
                            <FaMapMarkerAlt className="shrink-0 text-xs"/>
                             <span>Near Pashupati School, Bajrang Tola, Birganj.</span>
                        </a>
                </div>
        </div>

    </header>
  )
}

export default Topbar