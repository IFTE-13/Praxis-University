"use client"

import AdminDashboradContent from "@/components/app/dashborad/admin/admin-dashborad-content"
import StudentDashboardContnt from "@/components/app/dashborad/student/student-dashborad-content"
import TeacherDashboardContnt from "@/components/app/dashborad/teacher/teacher-dashboard-content";
import { useRole } from "@/providers/role-provider";

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
