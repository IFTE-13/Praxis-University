import React from 'react'
import FooterTag from './FooterTag'
import Link from 'next/link'
import FooterLinks from './FooterLinks'
import FooterSocialLinks from './FooterSocialLinks'
import { Separator } from '@/components/ui/separator'

const Footer = () => {
  return (
    <div>
        <footer className="relative w-full pt-4">
            <div className="w-full px-8 mx-auto max-w-screen">
                <Separator className='mb-2'/>
                <div className="grid justify-between grid-cols-1 gap-4 md:grid-cols-1 lg:grid-cols-2">
                    <h5 className="mb-6 text-xl font-semibold">Logo</h5>
                    <FooterLinks />
                </div>
                <Separator />
                <div className="flex flex-col items-center justify-center w-full py-4 border-slate-200 md:flex-row md:justify-between">
                    <p className="block mb-4 text-sm text-center text-muted-foreground md:mb-0">
                        Powered by Praxis University {" "}
                        <Link href={"/software-development-department"} className='text-black dark:text-white md:block transition-colors hover:text-black/60 dark:hover:text-white/60'>Software Development Department</Link>
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