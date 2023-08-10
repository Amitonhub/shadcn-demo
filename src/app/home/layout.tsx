'use client'
import { Inter } from 'next/font/google'
import { useGlobalContext } from '../context/store'
import SidebarNav from '@/components/SdebarNav'
import UserDropdown from '@/components/UserDropdown'
import { ModeToggle } from '@/components/ModeToggle'
import { sidebarNavItems } from '../../utils/SidebarItems'

const inter = Inter({ subsets: ['latin'] })

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return <>
    <div className=''>
      <div>
        <div className='flex items-center justify-between'>
          <h1 className="text-4xl font-bold text-center my-8">Shad-cn-Demo-AT</h1>
          <div className='flex gap-2'>
            <ModeToggle />
            <div className="mr-2">
              <UserDropdown />
            </div>
          </div>
        </div>
        <div className='flex navbar justify-end gap-2'>
        </div>
      </div>
    </div>
    <div className="flex">
      <aside className="w-1/5">
        <h1 className="flex text-4xl font-bold text-center my-8">Navigate</h1>
        <SidebarNav items={sidebarNavItems} />
      </aside>
      {children}
    </div>
  </>
}
