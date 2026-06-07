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
import { Badge } from "@/components/ui/badge"
import { BellRing, Clock } from "lucide-react"
import { announcementData } from "@/data/announcemntData"
import { JSX } from "react"
import { Announcement } from "@/utils/types"

type PriorityColors = {
    [K in Announcement['priority']]: string
  }
  
  type CategoryColors = {
    [K in Announcement['category']]: string
  }
  
  const getPriorityColor = (priority: Announcement['priority']): string => {
    const colors: PriorityColors = {
      high: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
      medium: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
      low: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
    }
    return colors[priority] || colors.medium
  }
  
  const getCategoryBadgeColor = (category: Announcement['category']): string => {
    const colors: CategoryColors = {
      Administrative: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
      Academic: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
      Health: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200"
    }
    return colors[category]
  }
  
  export function Announcements(): JSX.Element {
    return (
      <Card className="w-full">
        <CardHeader className="pb-4">
          <div className="flex items-center gap-2">
            <BellRing className="h-5 w-5" />
            <CardTitle>Announcements</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <Accordion type="single" collapsible className="w-full">
            {announcementData.map((item) => (
              <AccordionItem key={item.id} value={item.id} className="border-b py-2 mb-2">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex flex-col w-full gap-2 text-left">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full">
                      <h4 className="font-semibold text-base">{item.title}</h4>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        {new Date(item.date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 items-center">
                      <Badge variant="secondary" className={getCategoryBadgeColor(item.category)}>
                        {item.category}
                      </Badge>
                      <Badge variant="secondary" className={getPriorityColor(item.priority)}>
                        {item.priority.charAt(0).toUpperCase() + item.priority.slice(1)} Priority
                      </Badge>
                      <span className="text-sm text-muted-foreground">{item.shortDesc}</span>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="pt-4 pb-2 text-sm">
                    {item.content}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    )
  }