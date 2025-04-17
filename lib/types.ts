export type DashboardStatsData = {
    title: string;
    value: string;
    icon: React.ElementType;
  };

export interface Announcement {
    id: string
    date: string
    title: string
    category: "Administrative" | "Academic" | "Health"
    priority: "high" | "medium" | "low"
    shortDesc: string
    content: string
  }

  export  type UserRole = 'admin' | 'student' | 'teacher'

  export interface User {
    name: string
    email: string
    avatar: string
    role: UserRole
  }

 export interface NavItem {
    name: string
    url: string
    icon: React.ElementType
    role?: UserRole[]
  }

export type Payment = {
  id: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
}