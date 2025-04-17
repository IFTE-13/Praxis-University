import ConvocationDetails from '@/app/(guest)/convocation/_components/ConvocationDetails'
import ConvocationGraph from '@/app/(guest)/convocation/_components/ConvocationGraph'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import React from 'react'

const Convocation = () => {
  return (
    <MaxWidthWrapper>
      <ConvocationGraph />
      <ConvocationDetails />
    </MaxWidthWrapper>
  )
}

export default Convocation