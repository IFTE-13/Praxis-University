"use client"

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
  { month: "January", presnet: 186, absent: 80 },
  { month: "February", presnet: 305, absent: 200 },
  { month: "March", presnet: 237, absent: 120 },
  { month: "April", presnet: 73, absent: 190 },
  { month: "May", presnet: 209, absent: 130 },
  { month: "June", presnet: 214, absent: 140 },
]

const chartConfig = {
  presnet: {
    label: "Presnet",
    color: "hsl(var(--chart-1))",
  },
  absent: {
    label: "Absent",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export function StudentAttendanceChart() {
  return (
    <Card>
      <CardHeader className="pb-0">
        <CardTitle>Attendance</CardTitle>
      </CardHeader>
      <CardContent className="px-6 p-0">
      <ChartContainer config={chartConfig} className="max-h-[280px] w-full p-0">
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} horizontal={false}/>
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <ChartLegend content={<ChartLegendContent/>} className="py-2"/>
            <Bar dataKey="presnet" fill="var(--color-presnet)" radius={4} />
            <Bar dataKey="absent" fill="var(--color-absent)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
