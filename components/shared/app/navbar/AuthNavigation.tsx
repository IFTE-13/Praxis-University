import React from 'react'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { universityName } from '@/constants/site'
import { ModeToggle } from '@/components/mode-toggle'
import { MobileDropDown } from './MobileDropDown'

const AuthNavbar = () => {
    return (
        <nav>
        <MaxWidthWrapper>
            <div className='flex h-14 items-center justify-between'>
                        <Link href="/" className='flex z-40 font-semibold'>
                            <span>{universityName}</span>
                        </Link>
                        <div className='flex items-center space-x-2 md:space-x-4 sm:flex'>
                            
                            <Link 
                                className={buttonVariants({
                                    variant: "outline",
                                    effect: "shineHover",
                                    size: "sm"
                                })} 
                                href={"/contact-us"}>
                                contact us
                            </Link>
                            <Link 
                                className={`${buttonVariants({
                                    variant: "default",
                                    size: "sm",
                                    effect: "shineHover"
                                })}`}
                                href="/login"
                            >
                                login 
                            </Link>
                            <ModeToggle />
                            <MobileDropDown />
                        </div>
                    </div>
                    </MaxWidthWrapper>
            </nav>
    )
}

export default AuthNavbar;