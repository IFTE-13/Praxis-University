import React from 'react'
import { CalendarComponent } from '@/app/(user)/dashboard/_components/calendar'
import { Events } from '@/app/(user)/dashboard/_components/events'
import { Announcements } from '@/app/(user)/dashboard/_components/announcement'
import { FinanceChart } from '@/components/charts/finance-chart'
import { StudentAttendanceChart } from '@/components/charts/student-attendence-chart'
import { StudentsCountChart } from '@/components/charts/students-count-chart'
import StatsCard from './stats'

export default function AdminDashboradContent() {
  return (
    <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 px-6 lg:px-0 py-6">
      <div className="lg:col-span-2">
        <div className="flex flex-col gap-6">
          <StatsCard />
          
          {/* Nested charts grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3">
            <div className="md:col-span-1">
              <StudentsCountChart />
            </div>
            <div className="md:col-span-2 lg:ml-6 md:ml-0 mt-6 lg:mt-0">
              <StudentAttendanceChart />
            </div>
          </div>
          
          <FinanceChart />
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <CalendarComponent />
        <Events />
        <Announcements />
      </div>
  </div>
  )
}
