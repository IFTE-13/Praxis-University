import {
    Bell, 
    BookOpen, 
    Calendar, 
    GraduationCap, 
    School, 
    Building2, 
    Users, 
    MonitorPlay 
  } from 'lucide-react'
import { QuickLink } from './Types'

export const quickLinks: QuickLink[] = [
    {
      title: "Notices",
      icon: Bell,
      href: "/notices"
    },
    {
      title: "Campus Life",
      icon: School,
      href: "/campus-life"
    },
    {
      title: "Class & Exam Schedule",
      icon: Calendar,
      href: "/schedule"
    },
    {
      title: "Admission",
      icon: GraduationCap,
      href: "/admission"
    },
    {
      title: "Academic Result",
      icon: BookOpen,
      href: "/results"
    },
    {
      title: "Faculty & Department",
      icon: Users,
      href: "/faculty"
    },
    {
      title: "Facilities",
      icon: Building2,
      href: "/facilities"
    },
    {
      title: "Online Class Instructions",
      icon: MonitorPlay,
      href: "/online-classes"
    }
  ]