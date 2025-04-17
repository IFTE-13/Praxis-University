import React from 'react'
import { CalendarComponent } from '@/app/(user)/dashboard/_components/calendar'
import { Events } from '@/app/(user)/dashboard/_components/events'
import { Announcements } from '@/app/(user)/dashboard/_components/announcement'
import Schedule from './schedule'

export default function StudentDashboardContnt() {
  return (
    <div className="container mx-auto px-6 py-6 lg:px-0">
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2">
        <Schedule />
      </div>
      <div className="flex flex-col gap-6">
        <CalendarComponent />
        <Events />
        <Announcements />
      </div>
    </div>
  </div>
  )
}
