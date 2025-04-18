import React from 'react'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { MobileDropDown } from '@/app/(guest)/_components/Navbar/MobileDropDown'
import { universityName } from '@/constants/app'
import { ToggleMode } from '@/components/ToggleMode'
import { LogIn } from 'lucide-react'

const AuthNavbar = () => {
    return (
        <nav className='backdrop-blur-sm md:backdrop-blur-none'>
        <MaxWidthWrapper>
            <div className='flex h-14 items-center justify-between'>
                        <Link href="/" className='flex z-40 font-semibold'>
                            <span>{universityName}</span>
                        </Link>
                        <div className='items-center space-x-0 md:flex'>
                            <Link 
                                className={`${buttonVariants({
                                    variant: "ghost",
                                    size: "sm",
                                })}`}
                                href="/login"
                            >
                                <LogIn /> 
                            </Link>
                            <ToggleMode />
                            <MobileDropDown />
                        </div>
                    </div>
                    </MaxWidthWrapper>
            </nav>
    )
}

export default AuthNavbar;