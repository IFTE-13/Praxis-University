import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app/sidebar/app-sidebar"
import { cookies } from "next/headers";
import { Navbar } from "@/components/app/Navbar/navbar";
import { RoleProvider } from "@/providers/role-provider";


export default async  function AppLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    const cookieStore = await cookies()
    const defaultOpen = cookieStore.get("sidebar:state")?.value === "true"
    return (
      <RoleProvider>
        <SidebarProvider defaultOpen={defaultOpen}>
          <AppSidebar />
          <SidebarInset>
            <Navbar/>
              {children}
          </SidebarInset>
        </SidebarProvider>
      </RoleProvider>
    );
  }