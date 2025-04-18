import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { convocatonData } from '@/staticData/ConvocationData'
import { ConovocationDetailsChart } from './ConovocationDetailsChart'
import { TConvocaton } from './types'

const ConvocationDetails = () => {
  return (
    <>
        <Card>
            <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
                <div className="flex flex-1 flex-col justify-center gap-1 px-6 sm:py-6">
                <CardTitle>Convocation History</CardTitle>
                </div>
            </CardHeader>
            <CardContent className="px-2 sm:px-6">
                <Accordion type="single" collapsible className="w-full">
                {convocatonData?.map((item: TConvocaton, index: number) => (
                    <AccordionItem key={index} value={`item-${item.year}`}>
                    <AccordionTrigger>{`year of ${item.year}`}</AccordionTrigger>
                    <AccordionContent>
                            <ConovocationDetailsChart 
                                convocatonData={{
                                total: item.total,
                                male: item.male,
                                female: item.female,
                                undergraduate: item.undergraduate,
                                graduate: item.graduate,
                                date: item.date,
                                year: item.year,
                                }} 
                            />
                        </AccordionContent>
                    </AccordionItem>
                ))}
                </Accordion>
            </CardContent>
        </Card>
    </>
  )
}

export default ConvocationDetails