import React from 'react'
import { footerData } from './footerData'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className='w-full p-5 md:p-10 bg-black'>
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8'>
          <div className="col-span-1">
            <Image width={80} height={80} src="" alt="logo"/>
            <p className='text-white mt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed</p>
          </div>
          <div className="col-span-3 grid grid-cols-1 md:grid-cols-3 gap-8">
          {footerData.map((section, index) => (
              <ul key={index} className='space-y-2'>
                <li className='font-bold mb-2 text-white'>{section.title}</li>
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a href={link.url} className='text-white hover:text-gray-400'>{link.name}</a>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
    </div>
  )
}

export default Footer
