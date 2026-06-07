import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { dashboardStatsData } from '@/data/statsData';

export default function StatsCard() {
  return (
    <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
        {dashboardStatsData.map((card, index) => {
            const Icon = card.icon;
            return (
            <Card key={index}>
                <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                <CardTitle className="text-sm font-medium">{card.title}</CardTitle>
                <Icon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                </CardHeader>
                <CardContent>
                <div className="text-2xl font-bold">{card.value}</div>
                <p className="text-xs text-gray-500 dark:text-gray-400">updated at 22 Jan,25</p>
                </CardContent>
            </Card>
            );
        })}
    </div>
  )
}
