import React from "react"
import Header from "./Header"
import Footer from "./Footer"

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className=' h-screen w-screen overflow-hidden flex flex-col justify-center items-center'>
      <Header />
      <div className="flex flex-row h-[90%] w-full justify-between">
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout