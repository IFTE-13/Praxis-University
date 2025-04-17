"use client"

import {  Pie, PieChart } from "recharts"

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
} from "@/components/ui/chart"

const chartData = [
    { gender: "boys", visitors: 275, fill: "var(--color-boys)" },
    { gender: "girls", visitors: 200, fill: "var(--color-girls)" },
]

const chartConfig = {
  boys: {
    label: "Boys",
    color: "hsl(var(--chart-2))",
  },
  girls: {
    label: "Girls",
    color: "hsl(var(--chart-4))",
  },
} satisfies ChartConfig

export function StudentsCountChart() {
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Students</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-w-[280px]"
        >
          <PieChart>
            <Pie data={chartData} dataKey="visitors" />
            <ChartLegend
              content={<ChartLegendContent nameKey="gender" />}
              className="-translate-y-2 flex-wrap gap-2 [&>*]:basis-1/4 [&>*]:justify-center"
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
