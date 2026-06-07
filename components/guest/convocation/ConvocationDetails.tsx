import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { convocatonData } from '@/staticData/ConvocationData'
import { ConvocatonDataType } from '@/constants/Types'
import { ConovocationDetailsChart } from './ConovocationDetailsChart'
import { CalendarRange, MapPin } from 'lucide-react'

const ConvocationDetails = () => {
  return (
    <>
        <Card className='my-10'>
            <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
                <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
                <CardTitle>convocation graph</CardTitle>
                </div>
            </CardHeader>
            <CardContent className="px-2 sm:p-6">
                <Accordion type="single" collapsible className="w-full">
                {convocatonData?.map((item: ConvocatonDataType, index: number) => (
                    <AccordionItem key={index} value={`item-${item.year}`}>
                    <AccordionTrigger>{`year of ${item.year}`}</AccordionTrigger>
                    <AccordionContent>
                        <div>
                        <ConovocationDetailsChart 
                            convocatonData={{
                            total: item.total,
                            male: item.male,
                            female: item.female,
                            undergraduate: item.undergraduate,
                            graduate: item.graduate,
                            }} 
                        />
                        <Card className='mt-2 px-4'>
                            <p className='pt-4 flex flex-row items-center gap-x-3 font-semibold'><MapPin size={15}/> {item.venue}</p>
                            <p className='pt-4 flex flex-row items-center gap-x-3 font-semibold'><CalendarRange size={15}/>{item.date}, {item.year}</p>
                            <p className='pt-4'></p>
                        </Card>
                        </div>
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