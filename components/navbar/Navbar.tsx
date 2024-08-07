import Link from 'next/link'
import React from 'react'
import { ActiveLink } from '../active-link/ActiveLink'

//al menos de que espesifiquemos que es useclient por defecto será server

const navItems = [
    {path: '/about', text: 'About'},
    {path: '/contact', text: 'Contact'},
    {path: '/pricing', text: 'Pricing'},
]

export const Navbar = () => {
  return (
    <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
        <Link href="/">
            <span>Home</span>
        </Link>

        <div className="flex flex-1"></div>

        {
            navItems.map( navItems => (
              <ActiveLink key={navItems.path} {...navItems}/>
            ))
        }
    
    </nav>
  )
}
