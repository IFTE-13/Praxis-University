import React from 'react'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { SubNavigation } from '@/app/(guest)/_components/Navbar/SubNavigation'
import AuthNavbar from '@/app/_components/AuthNavigation'

const Navbar = () => {
    return (
        <div className='sticky h-14 md:h-14 lg:h-28 insex-x-0 top-0 z-30 w-full backdrop-blur-md border-b'>
            <AuthNavbar /> 
            <nav className="h-14 lg:flex items-center hidden">
                <MaxWidthWrapper>
                    <SubNavigation />
                </MaxWidthWrapper>
            </nav>
        </div>
    )
}

export default Navbar