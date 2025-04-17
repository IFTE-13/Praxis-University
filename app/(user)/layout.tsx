import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/app/(user)/_components/sidebar/app-sidebar"
import { cookies } from "next/headers";
import { Navbar } from "@/app/(user)/_components/navbar";
import { RoleProvider } from "@/context/role-provider";


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