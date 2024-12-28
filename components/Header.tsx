'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Menu, X } from 'lucide-react'
import { smoothScroll } from '../utils/smoothScroll'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <img src="/HonestAgent/placeholder.svg" alt="HonestAgent Logo" className="h-10 w-10 mr-2" />
            <span className="text-2xl font-bold text-blue-600">HonestAgent</span>
          </Link>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-600 hover:text-blue-600">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:block absolute md:relative top-full left-0 right-0 bg-white md:bg-transparent z-20 md:top-auto`}>
            <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 p-4 md:p-0">
              <li><Link href="#services" onClick={(e) => { toggleMenu(); smoothScroll(e); }} className="text-gray-600 hover:text-blue-600">Services</Link></li>
              <li><Link href="#about" onClick={(e) => { toggleMenu(); smoothScroll(e); }} className="text-gray-600 hover:text-blue-600">About</Link></li>
              <li><Link href="#team" onClick={(e) => { toggleMenu(); smoothScroll(e); }} className="text-gray-600 hover:text-blue-600">Team</Link></li>
              <li><Button variant="outline" onClick={toggleMenu}>Contact Us</Button></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

