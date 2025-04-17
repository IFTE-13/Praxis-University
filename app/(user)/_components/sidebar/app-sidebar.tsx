"use client"

import * as React from "react"
import {
  BookCheck,
  BookOpenCheck,
  CircleUser,
  Contact,
  FileUser,
  GraduationCap,
  Home,
  MicVocal,
  NotepadText,
  PartyPopper,
  Send,
  Settings,
  Shapes,
  Users,
} from "lucide-react"

import { NavMenu } from "./nav-menu"
import { NavSecondary } from "./nav-secondary"
import { NavUser } from "./nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import Link from "next/link"
import { NavItem, UserRole } from "@/lib/types"
import { useRole } from "@/context/role-provider"

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
    role: "admin" as UserRole,
  },
  navSecondary: [
    {
      title: "Profile",
      url: "#",
      icon: CircleUser,
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings,
    },
  ],
  navMenu: [
    {
      name: "Home",
      url: "/dashboard",
      icon: Home,
      role: ["admin", "student", "teacher"] as UserRole[]
    },
    {
      name: "Teachers",
      url: "/teachers",
      icon: FileUser,
      role: ["admin"] as UserRole[]
    },
    {
      name: "Students",
      url: "/students",
      icon: Contact,
      role: ["admin", "teacher"] as UserRole[]
    },
    {
      name: "Parents",
      url: "#",
      icon: Users,
      role: ["admin", "teacher"] as UserRole[]
    },
    {
      name: "Classes",
      url: "#",
      icon: Shapes,
      role: ["admin", "teacher", "student"] as UserRole[]
    },
    {
      name: "Lessons",
      url: "#",
      icon: NotepadText,
      role: ["admin", "teacher", "student"] as UserRole[]
    },
    {
      name: "Exams",
      url: "#",
      icon: BookOpenCheck,
      role: ["admin", "teacher", "student"] as UserRole[]
    },
    {
      name: "Assignments",
      url: "#",
      icon: BookCheck,
      role: ["admin", "teacher", "student"] as UserRole[]
    },
    {
      name: "Events",
      url: "#",
      icon: PartyPopper,
      role: ["admin", "teacher", "student"] as UserRole[]
    },
    {
      name: "Messages",
      url: "#",
      icon: Send,
      role: ["admin", "teacher", "student"] as UserRole[]
    },
    {
      name: "Announcement",
      url: "#",
      icon: MicVocal,
      role: ["admin", "teacher"] as UserRole[]
    },
  ] as NavItem[],
}

const hasAccess = (userRole: UserRole, itemRoles?: UserRole[]) => {
  if (!itemRoles) return true
  return itemRoles.includes(userRole)
}

interface AppSidebarProps extends React.ComponentProps<typeof Sidebar> {
  userRole?: UserRole
}

export function AppSidebar({ ...props }: AppSidebarProps) {
  const { userRole } = useRole();
  const filteredNavMenu = data.navMenu.filter(item => hasAccess(userRole, item.role))

  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <GraduationCap className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">Praxis</span>
                  <span className="truncate text-xs">University</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMenu items={filteredNavMenu} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}

