import React from 'react'
import Search from './Search'
import CardCount from './CardCount'
import User from './User'
import NavigationMenu from './NavigationMenu'
import Logo from './Logo'
import Link from 'next/link'
import { getCurrentUser } from '@/app/actions/getCurrentUser'

const Navbar =  async() => {
  const currentUser = await getCurrentUser()
  return (
    <div className='flex items-center justify-between gap-3 md:gap-10 px-3 md:px-10 h-16 bg-orange-600 text-slate-100'>
        <Logo />
        <Search />
        <Link href="/cart"> <CardCount /></Link>
        <User  currentUser={currentUser}/>
        <NavigationMenu />
    </div>  
  )
}

export default Navbar