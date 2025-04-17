import { DashboardStatsData } from "@/lib/types";
import { Contact, FileUser, Users, UsersRound } from "lucide-react";

export const dashboardStatsData: DashboardStatsData[] = [
    {
      title: "Teacher",
      value: "622",
      icon: FileUser,
    },
    {
      title: "Student",
      value: "79",
      icon: Contact,
    },
    {
      title: "Parent",
      value: "122",
      icon: Users,
    },
    {
      title: "Stuff",
      value: "23",
      icon: UsersRound,
    },
  ];
  