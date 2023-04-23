import React from 'react'
import { HomeIcon } from '@radix-ui/react-icons'

const Sidebar = () => {
  return (
    <aside className="pt-8 h-screen w-1/6 flex flex-col items-center bg-white border-r">
        <div className="flex items-center gap-4">
            <HomeIcon /> Home
        </div>
    </aside>
  )
}

export default Sidebar