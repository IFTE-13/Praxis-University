import React from 'react'
import { ISocialType } from './types'
import { links } from './data'

const FooterSocialLinks = () => {
  return (
    <div className="flex gap-4 sm:justify-center">
        {links.map(({ label, href, icon: Icon}: ISocialType, index: number) => (
            <a
            key={index}
            href={href}
            className="block transition-opacity text-inherit hover:opacity-80"
            aria-label={label}
            >
              <Icon />
            </a>
        ))}
    </div>
  )
}

export default FooterSocialLinks