"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { CalendarDays } from "lucide-react"

const accordionData = [
  {
    id: "item-1",
    date: "2024-01-15",
    subject: "Annual Sports Meet",
    shortDesc: "Annual inter-house sports competition",
    question: "What activities are included?",
    answer: "The sports meet includes track events (100m, 200m, relay), field events (long jump, shot put), and team sports like football and basketball. All students from grades 6-12 are eligible to participate."
  },
  {
    id: "item-2",
    date: "2024-02-01",
    subject: "Science Exhibition",
    shortDesc: "Showcasing student innovation projects",
    question: "How can students participate?",
    answer: "Students can register their projects in teams of 2-3. Projects should focus on renewable energy, environmental conservation, or biotechnology. Registration deadline is January 25th."
  },
  {
    id: "item-3",
    date: "2024-02-15",
    subject: "Parent-Teacher Meeting",
    shortDesc: "Term 1 academic performance review",
    question: "What is the schedule?",
    answer: "Meetings will be held from 9 AM to 3 PM. Each parent will get a 15-minute slot with their child's class teacher. Online booking for time slots opens next week."
  }
]

export function Events() {
  return (
    <Card className="w-full">
      <CardHeader className="pb-2">
        <CardTitle>Upcoming Events</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Accordion type="single" collapsible className="w-full">
          {accordionData.map((item) => (
            <AccordionItem key={item.id} value={item.id}>
              <AccordionTrigger className="hover:no-underline">
                <div className="flex flex-col sm:flex-row w-full items-start sm:items-center gap-2 text-left">
                  <div className="flex items-center gap-2 min-w-[120px] text-muted-foreground">
                    <CalendarDays className="h-4 w-4" />
                    <span className="text-sm">
                      {new Date(item.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric'
                      })}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h4 className="text-sm font-semibold">{item.subject}</h4>
                    <p className="text-sm text-muted-foreground">{item.shortDesc}</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="pt-2">
                  <h5 className="font-medium mb-2">{item.question}</h5>
                  <p className="text-sm text-muted-foreground">{item.answer}</p>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  )
}