"use client"

import * as React from "react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { convocatonData } from "@/staticData/ConvocationData"

export const description = "An interactive bar chart"

const chartConfig = {
  total: {
    label: "Total",
    color: "#000000",
  },
  male: {
    label: "Male",
    color: "#2dd4bf",
  },
  female: {
    label: "Female",
    color: "#818cf8",
  },
} satisfies ChartConfig

export default function ConvocationGraph() {
  const [activeChart, setActiveChart] =
    React.useState<keyof typeof chartConfig>("total")

  const total = React.useMemo(
    () => ({
      total: convocatonData.reduce((acc, curr) => acc + curr.total, 0),
      male: convocatonData.reduce((acc, curr) => acc + curr.male, 0),
      female: convocatonData.reduce((acc, curr) => acc + curr.female, 0),
    }),
    []
  )

  return (
    <Card className="my-10">
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
          <CardTitle>convocation graph</CardTitle>
          <CardDescription>
            showing all previous convocation history
          </CardDescription>
        </div>
        <div className="flex">
          {["total", "male", "female"].map((key) => {
            const chart = key as keyof typeof chartConfig
            return (
              <button
                key={chart}
                data-active={activeChart === chart}
                className="relative flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6"
                onClick={() => setActiveChart(chart)}
              >
                <span className="text-xs text-muted-foreground">
                  {chartConfig[chart].label}
                </span>
                <span className="text-lg font-bold leading-none sm:text-3xl">
                  {total[key as keyof typeof total].toLocaleString()}
                </span>
              </button>
            )
          })}
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <BarChart
            accessibilityLayer
            data={convocatonData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="year"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => value.toString()}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey="views"
                  labelFormatter={(value) => value.toString()}
                />
              }
            />
            <Bar dataKey={activeChart} fill={chartConfig[activeChart].color} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
