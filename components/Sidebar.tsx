'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, Search, Building, User, Settings, Menu } from 'lucide-react'
import { cn } from "@/lib/utils"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

const menuItems = [
  { icon: Home, label: 'Home', href: '/' },
  { icon: Search, label: 'Search', href: '/search' },
  { icon: Building, label: 'Listings', href: '/listing' },
  { icon: User, label: 'Profile', href: '/profile' },
  { icon: Settings, label: 'Settings', href: '/settings' },
]

export function AppSidebar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <SidebarProvider className=' text-background bg-primary' defaultOpen={true}>
      <Sidebar className="border-r">
        <SidebarHeader className="flex items-center justify-between p-4">
          <Link href="/" className="flex items-center space-x-2">
            <Building className="h-10 w-10" />
            <span className="text-lg font-bold">RealEstate</span>
          </Link>
        </SidebarHeader>
        <SidebarContent className='gap-6'>
          <SidebarMenu >
            {menuItems.map((item) => (
              <SidebarMenuItem key={item.href} className=' px-4 items-center justify-center'>
                <SidebarMenuButton asChild className={cn( 'text-md font-semibold',
                  pathname === item.href && "bg-muted"
                )}>
                  <Link href={item.href} className="flex items-center space-x-2">
                    <item.icon className="h-10 w-10" />
                    <span>{item.label}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter className="p-4">
          <p className="text-sm text-muted-foreground">© 2023 RealEstate Inc.</p>
        </SidebarFooter>
      </Sidebar>
    </SidebarProvider>
  )
}

export function MobileSidebar() {
  const [open, setOpen] = useState(false)

  return (
    <div className="lg:hidden">
      <button onClick={() => setOpen(true)} className="p-2">
        <Menu className="h-6 w-6" />
      </button>
      {open && (
        <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm">
          <div className="fixed left-0 top-0 h-full w-64 bg-background shadow-lg">
            <AppSidebar />
            <button onClick={() => setOpen(false)} className="absolute right-4 top-4 p-2">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

