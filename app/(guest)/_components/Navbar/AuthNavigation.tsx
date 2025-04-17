import React from 'react'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { MobileDropDown } from '@/app/(guest)/_components/Navbar/MobileDropDown'
import { universityName } from '@/constants/app'

const AuthNavbar = () => {
    return (
        <nav className='border-b border-gray-200'>
        <MaxWidthWrapper>
            <div className='flex h-14 items-center justify-between'>
                        <Link href="/" className='flex z-40 font-semibold'>
                            <span>{universityName}</span>
                        </Link>
                        <div className='items-center space-x-4 sm:flex'>
                            <Link 
                                className={buttonVariants({
                                    variant: "outline",
                                    size: "sm"
                                })} 
                                href={"/contact-us"}>
                                contact us
                            </Link>
                            <Link 
                                className={`${buttonVariants({
                                    variant: "outline",
                                    size: "sm",
                                })}`}
                                href="/login"
                            >
                                login 
                            </Link>
                            <MobileDropDown />
                        </div>
                    </div>
                    </MaxWidthWrapper>
            </nav>
    )
}

export default AuthNavbar;