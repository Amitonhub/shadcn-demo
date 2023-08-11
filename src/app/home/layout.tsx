'use client'
import { Inter } from 'next/font/google'
import { useGlobalContext } from '../context/store'
import SidebarNav from '@/components/SdebarNav'
import UserDropdown from '@/components/UserDropdown'
import { ModeToggle } from '@/components/ModeToggle'
import { sidebarNavItems } from '../../utils/SidebarItems'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <>
      <Navbar />
      <div className="flex">
        <div className="w-1/5">
          <h1 className="flex text-4xl font-bold text-center my-8">Navigate</h1>
          <SidebarNav items={sidebarNavItems} />
        </div>
        {children}
      </div>
    </>
  )
}
