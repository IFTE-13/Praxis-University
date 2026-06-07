import React from 'react'
import { CalendarSection } from '@/components/app/dashborad/calendar'
import { Announcements } from '@/components/app/dashborad/announcement'
import Schedule from '../student/schedule'

export default function TeacherDashboardContnt() {
  return (
    <div className="container mx-auto px-6 py-6 lg:px-0">
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2">
        <Schedule />
      </div>
      <div className="flex flex-col gap-6">
        <CalendarSection />
        <Announcements />
      </div>
    </div>
  </div>
  )
}