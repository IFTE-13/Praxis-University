import React from 'react'
import { SocialLink, socialLinks } from '@/constants/SocialLinkList'

const FooterSocialLinks = () => {
  return (
    <div className="flex gap-4 text-slate-600 sm:justify-center">
        {socialLinks.map(({ label, href, icon: Icon}: SocialLink, index: number) => (
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