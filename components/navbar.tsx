"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Car, ChevronDown, Menu, X, User, Bell } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from '@/lib/utils'

const navigation = [
  {
    name: 'Find a car',
    href: '/cars',
    hasDropdown: true,
    items: [
      { name: 'Browse All Cars', href: '/cars' },
      { name: 'Monthly Plans', href: '/cars?plan=monthly' },
      { name: 'Weekly Plans', href: '/cars?plan=weekly' },
      { name: 'Luxury Collection', href: '/cars?category=luxury' },
      { name: 'Electric Vehicles', href: '/cars?type=electric' },
    ]
  },
  { name: 'How it works', href: '#how-it-works', hasDropdown: false },
  { name: 'Article Hub', href: '/articles', hasDropdown: false },
  { name: 'Locations', href: '/locations', hasDropdown: false },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="relative z-50">
      <header className={cn(
        "fixed w-full transition-all duration-300",
        scrolled 
          ? "bg-white/95 backdrop-blur-md shadow-md py-2" 
          : "bg-white/50 backdrop-blur-sm py-4"
      )}>
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="flex items-center text-xl font-bold text-primary">
                <Car className="mr-2 h-6 w-6" />
                DriveSelect
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:gap-x-8">
            {navigation.map((item) => (
              item.hasDropdown ? (
                <DropdownMenu key={item.name}>
                  <DropdownMenuTrigger className="group flex items-center gap-1 text-sm font-semibold leading-6 text-gray-900">
                    <span className="relative">
                      {item.name}
                      <span className="absolute inset-x-0 -bottom-2 h-0.5 scale-x-0 bg-primary transition-transform duration-200 group-hover:scale-x-100" />
                    </span>
                    <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-48">
                    {item.items?.map((subItem) => (
                      <DropdownMenuItem key={subItem.name} className="focus:bg-gray-50">
                        <Link href={subItem.href} className="w-full">
                          {subItem.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="group relative text-sm font-semibold leading-6 text-gray-900"
                >
                  <span className="relative">
                    {item.name}
                    <span className="absolute inset-x-0 -bottom-2 h-0.5 scale-x-0 bg-primary transition-transform duration-200 group-hover:scale-x-100" />
                  </span>
                </Link>
              )
            ))}
          </div>

          {/* Desktop Right Section */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-6">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-white">
                2
              </span>
            </Button>
            <Button variant="outline" className="gap-2">
              <User className="h-4 w-4" />
              Sign In
            </Button>
            <Button>Get Started</Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-black/20 backdrop-blur-sm transition-opacity lg:hidden",
          mobileMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        )}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div
        className={cn(
          "fixed inset-y-0 right-0 w-full max-w-sm bg-white px-6 py-6 transition-transform duration-300 ease-in-out lg:hidden",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex items-center justify-between">
          <Link href="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
            <span className="flex items-center text-xl font-bold text-primary">
              <Car className="mr-2 h-6 w-6" />
              DriveSelect
            </span>
          </Link>
          <button
            type="button"
            className="-m-2.5 rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(false)}
          >
            <X className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* Mobile Menu Items */}
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="space-y-2 py-6">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.hasDropdown ? (
                    <>
                      <div className="text-sm font-semibold leading-6 text-gray-900">
                        {item.name}
                      </div>
                      <div className="ml-4 mt-2 space-y-2">
                        {item.items?.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
            <div className="py-6 space-y-3">
              <Button variant="outline" className="w-full gap-2">
                <User className="h-4 w-4" />
                Sign In
              </Button>
              <Button className="w-full">Get Started</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}