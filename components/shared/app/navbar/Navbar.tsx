import React from 'react'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import AuthNavbar from './AuthNavigation'
import { SubNavigation } from './SubNavigation'
import { Separator } from '@/components/ui/separator'

const Navbar = () => {
    return (
        <div className='sticky h-14 md:h-14 lg:h-28 insex-x-0 top-0 z-30 w-full backdrop-blur-sm bg-background/50'>
            <AuthNavbar /> 
            <Separator />
            <nav className="h-14 lg:flex items-center hidden">
                <MaxWidthWrapper>
                    <SubNavigation />
                </MaxWidthWrapper>
            </nav>
        </div>
    )
}

export default Navbar