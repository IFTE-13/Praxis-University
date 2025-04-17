"use client"

import AdminDashboradContent from "@/app/(user)/dashboard/_components/admin/admin-dashborad-content"
import StudentDashboardContnt from "@/app/(user)/dashboard/_components/student/student-dashborad-content"
import TeacherDashboardContnt from "@/app/(user)/dashboard/_components/teacher/teacher-dashboard-content"
import { useRole } from "@/context/role-provider";

export default function DashboardPage() {
  const { userRole } = useRole();

  return (
    <>
      { userRole === "admin" && <AdminDashboradContent />}
      { userRole === "student" && <StudentDashboardContnt />}
      { userRole === "teacher" && <TeacherDashboardContnt />}
    </>
  )
}