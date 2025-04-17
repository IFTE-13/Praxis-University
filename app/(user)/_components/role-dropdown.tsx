"use client"
import * as React from "react"
import { Contact, FileUser, ShieldCheck, UserCircle, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useRole } from "@/context/role-provider"
import { UserRole } from "@/lib/types"

export default function RoleDropDown() {
  const { userRole, setUserRole } = useRole()

  const roleConfig = [
    {
      role: "admin" as UserRole,
      label: "Admin",
      Icon: ShieldCheck
    },
    {
      role: "teacher" as UserRole,
      label: "Teacher",
      Icon: FileUser
    },
    {
      role: "student" as UserRole,
      label: "Student",
      Icon: Contact
    }
  ]

  const CurrentRoleIcon = roleConfig.find(item => item.role === userRole)?.Icon || UserCircle

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="gap-2">
          <CurrentRoleIcon className="h-[1.2rem] w-[1.2rem]" />
          <span className="capitalize">{userRole}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {roleConfig.map(({ role, label, Icon }) => (
          <DropdownMenuItem 
            key={role}
            onClick={() => setUserRole(role)}
            className="gap-2"
          >
            <Icon className="h-4 w-4" />
            {label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}