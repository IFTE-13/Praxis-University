import React from 'react'
import FooterTag from './FooterTag'
import Link from 'next/link'
import FooterLinks from './FooterLinks'
import FooterSocialLinks from './FooterSocialLinks'
import Image from 'next/image'
import logo from '@/public/ulogo.png'

const Footer = () => {
  return (
    <div>
        <footer className="relative w-full pt-4">
            <div className="w-full px-8 mx-auto max-w-screen">
                <div className="grid justify-between border-t grid-cols-1 gap-4 md:grid-cols-1 lg:grid-cols-2">
                    <Image src={logo} alt="Logo" width={400} height={400} className="mx-auto" />
                    <FooterLinks />
                </div>
                <div className="flex flex-col items-center justify-center w-full py-4 mt-12 border-t border-slate-200 md:flex-row md:justify-between">
                    <p className="block mb-4 text-sm text-center text-slate-500 md:mb-0">
                        Powered by Praxis University {" "}
                        <Link href={"/software-development-department"} className='text-black'>Software Development Department</Link>
                    </p>
                    <FooterSocialLinks />
                </div>
            </div>
        </footer>
        <FooterTag />
    </div>
  )
}

export default Footer