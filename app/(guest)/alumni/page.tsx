import { AlumniDetailsChart } from '@/app/(guest)/alumni/_components/AlumniDetailsChart'
import { AlumniDetailsTable } from '@/app/(guest)/alumni/_components/AlumniDetailsTable'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import React from 'react'

const Alumni = () => {
  return (
    <MaxWidthWrapper>
        <AlumniDetailsChart />
        <AlumniDetailsTable />
    </MaxWidthWrapper>
  )
}

export default Alumni