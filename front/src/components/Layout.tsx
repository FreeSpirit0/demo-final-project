import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

interface Props {
    children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children}) => {
  return (
    <div className="flex flex-wrap">
        <Navbar />
        <Sidebar />
        <main className='w-5/6'>{children}</main>
    </div>
  )
}

export default Layout