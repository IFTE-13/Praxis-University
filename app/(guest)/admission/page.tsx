import { DepartmentListTable } from '@/app/(guest)/admission/_components/DepartmentListTable'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import React from 'react'

const Admission = () => {
  return (
    <MaxWidthWrapper>
        <DepartmentListTable />
    </MaxWidthWrapper>
  )
}

export default Admission