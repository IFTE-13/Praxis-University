import React from 'react'
import { footerItems, FooterItems, Link as link } from '@/constants/FooterNavigationList'

const FooterLinks = () => {
  return (
    <div className="grid justify-between grid-cols-1 gap-4 md:grid-cols-1 lg:grid-cols-3">
        {footerItems.map(({title, links}: FooterItems, index: number) => (
          <ul key={index} className='border-t py-8 block lg:border-none'>
            <p className="block mb-1 text-base font-semibold">
              {title}
            </p>
            {links.map(({label, href}: link) => (
              <li key={label} className='py-1 text-balance lg:w-9/12 w-full'>
                <a
                  href={href}
                  className="block text-muted-foreground py-1 hover:font-medium transition-all duration-150 text-sm"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        ))}
      </div>
  )
}

export default FooterLinks