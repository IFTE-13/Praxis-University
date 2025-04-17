"use client"

import * as React from "react"
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

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
const chartData = [
  { date: "2024-04-01", earning: 222, expense: 150 },
  { date: "2024-04-02", earning: 97, expense: 180 },
  { date: "2024-04-03", earning: 167, expense: 120 },
  { date: "2024-04-04", earning: 242, expense: 260 },
  { date: "2024-04-05", earning: 373, expense: 290 },
  { date: "2024-04-06", earning: 301, expense: 340 },
  { date: "2024-04-07", earning: 245, expense: 180 },
  { date: "2024-04-08", earning: 409, expense: 320 },
  { date: "2024-04-09", earning: 59, expense: 110 },
  { date: "2024-04-10", earning: 261, expense: 190 },
  { date: "2024-04-11", earning: 327, expense: 350 },
  { date: "2024-04-12", earning: 292, expense: 210 },
  { date: "2024-04-13", earning: 342, expense: 380 },
  { date: "2024-04-14", earning: 137, expense: 220 },
  { date: "2024-04-15", earning: 120, expense: 170 },
  { date: "2024-04-16", earning: 138, expense: 190 },
  { date: "2024-04-17", earning: 446, expense: 360 },
  { date: "2024-04-18", earning: 364, expense: 410 },
  { date: "2024-04-19", earning: 243, expense: 180 },
  { date: "2024-04-20", earning: 89, expense: 150 },
  { date: "2024-04-21", earning: 137, expense: 200 },
  { date: "2024-04-22", earning: 224, expense: 170 },
  { date: "2024-04-23", earning: 138, expense: 230 },
  { date: "2024-04-24", earning: 387, expense: 290 },
  { date: "2024-04-25", earning: 215, expense: 250 },
  { date: "2024-04-26", earning: 75, expense: 130 },
  { date: "2024-04-27", earning: 383, expense: 420 },
  { date: "2024-04-28", earning: 122, expense: 180 },
  { date: "2024-04-29", earning: 315, expense: 240 },
  { date: "2024-04-30", earning: 454, expense: 380 },
  { date: "2024-05-01", earning: 165, expense: 220 },
  { date: "2024-05-02", earning: 293, expense: 310 },
  { date: "2024-05-03", earning: 247, expense: 190 },
  { date: "2024-05-04", earning: 385, expense: 420 },
  { date: "2024-05-05", earning: 481, expense: 390 },
  { date: "2024-05-06", earning: 498, expense: 520 },
  { date: "2024-05-07", earning: 388, expense: 300 },
  { date: "2024-05-08", earning: 149, expense: 210 },
  { date: "2024-05-09", earning: 227, expense: 180 },
  { date: "2024-05-10", earning: 293, expense: 330 },
  { date: "2024-05-11", earning: 335, expense: 270 },
  { date: "2024-05-12", earning: 197, expense: 240 },
  { date: "2024-05-13", earning: 197, expense: 160 },
  { date: "2024-05-14", earning: 448, expense: 490 },
  { date: "2024-05-15", earning: 473, expense: 380 },
  { date: "2024-05-16", earning: 338, expense: 400 },
  { date: "2024-05-17", earning: 499, expense: 420 },
  { date: "2024-05-18", earning: 315, expense: 350 },
  { date: "2024-05-19", earning: 235, expense: 180 },
  { date: "2024-05-20", earning: 177, expense: 230 },
  { date: "2024-05-21", earning: 82, expense: 140 },
  { date: "2024-05-22", earning: 81, expense: 120 },
  { date: "2024-05-23", earning: 252, expense: 290 },
  { date: "2024-05-24", earning: 294, expense: 220 },
  { date: "2024-05-25", earning: 201, expense: 250 },
  { date: "2024-05-26", earning: 213, expense: 170 },
  { date: "2024-05-27", earning: 420, expense: 460 },
  { date: "2024-05-28", earning: 233, expense: 190 },
  { date: "2024-05-29", earning: 78, expense: 130 },
  { date: "2024-05-30", earning: 340, expense: 280 },
  { date: "2024-05-31", earning: 178, expense: 230 },
  { date: "2024-06-01", earning: 178, expense: 200 },
  { date: "2024-06-02", earning: 470, expense: 410 },
  { date: "2024-06-03", earning: 103, expense: 160 },
  { date: "2024-06-04", earning: 439, expense: 380 },
  { date: "2024-06-05", earning: 88, expense: 140 },
  { date: "2024-06-06", earning: 294, expense: 250 },
  { date: "2024-06-07", earning: 323, expense: 370 },
  { date: "2024-06-08", earning: 385, expense: 320 },
  { date: "2024-06-09", earning: 438, expense: 480 },
  { date: "2024-06-10", earning: 155, expense: 200 },
  { date: "2024-06-11", earning: 92, expense: 150 },
  { date: "2024-06-12", earning: 492, expense: 420 },
  { date: "2024-06-13", earning: 81, expense: 130 },
  { date: "2024-06-14", earning: 426, expense: 380 },
  { date: "2024-06-15", earning: 307, expense: 350 },
  { date: "2024-06-16", earning: 371, expense: 310 },
  { date: "2024-06-17", earning: 475, expense: 520 },
  { date: "2024-06-18", earning: 107, expense: 170 },
  { date: "2024-06-19", earning: 341, expense: 290 },
  { date: "2024-06-20", earning: 408, expense: 450 },
  { date: "2024-06-21", earning: 169, expense: 210 },
  { date: "2024-06-22", earning: 317, expense: 270 },
  { date: "2024-06-23", earning: 480, expense: 530 },
  { date: "2024-06-24", earning: 132, expense: 180 },
  { date: "2024-06-25", earning: 141, expense: 190 },
  { date: "2024-06-26", earning: 434, expense: 380 },
  { date: "2024-06-27", earning: 448, expense: 490 },
  { date: "2024-06-28", earning: 149, expense: 200 },
  { date: "2024-06-29", earning: 103, expense: 160 },
  { date: "2024-06-30", earning: 446, expense: 400 },
]

const chartConfig = {
  views: {
    label: "Page Views",
  },
  earning: {
    label: "Earning",
    color: "hsl(var(--chart-1))",
  },
  expense: {
    label: "Expense",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export function FinanceChart() {
  const [activeChart, setActiveChart] =
    React.useState<keyof typeof chartConfig>("earning")

  const total = React.useMemo(
    () => ({
      earning: chartData.reduce((acc, curr) => acc + curr.earning, 0),
      expense: chartData.reduce((acc, curr) => acc + curr.expense, 0),
    }),
    []
  )

  return (
    <Card>
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
          <CardTitle>Finance</CardTitle>
          <CardDescription>
            Showing finance for the last 3 months
          </CardDescription>
        </div>
        <div className="flex">
          {["earning", "expense"].map((key) => {
            const chart = key as keyof typeof chartConfig
            return (
              <button
                key={chart}
                data-active={activeChart === chart}
                className="flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6"
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
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value)
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })
              }}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey="views"
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })
                  }}
                />
              }
            />
            <Line
              dataKey={activeChart}
              type="monotone"
              stroke={`var(--color-${activeChart})`}
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
