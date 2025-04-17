import { Announcement } from "@/lib/types";

export const announcementData: Announcement[] = [
    {
      id: "ann-1",
      date: "2024-01-15",
      title: "Fee Structure Update",
      category: "Administrative",
      priority: "high",
      shortDesc: "Changes in the upcoming semester fee structure",
      content: "We are writing to inform all parents about the revised fee structure for the upcoming academic semester. The changes include adjustments to tuition fees and the introduction of new technology resources. Detailed fee breakup will be shared via email."
    },
    {
      id: "ann-2",
      date: "2024-01-14",
      title: "New Library Resources",
      category: "Academic",
      priority: "medium",
      shortDesc: "Access to digital library now available",
      content: "The school has subscribed to a new digital library platform. Students can now access over 10,000 e-books and research papers. Login credentials will be distributed in classes this week."
    },
    {
      id: "ann-3",
      date: "2024-01-13",
      title: "COVID-19 Protocol Update",
      category: "Health",
      priority: "high",
      shortDesc: "Updated safety guidelines for campus",
      content: "In light of recent health advisories, we have updated our campus safety protocols. New measures include enhanced sanitization schedules and revised social distancing guidelines in common areas."
    }
  ]