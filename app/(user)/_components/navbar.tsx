"use client";

import { usePathname } from "next/navigation";
import { SearchForm } from '@/components/forms/SearchForm';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { ModeToggle } from "@/components/ToggleMode";
import RoleDropDown from "./role-dropdown";

export const Navbar = () => {
  const pathname = usePathname();
  const currentPage = pathname
    .split("/")
    .filter(Boolean)
    .map(segment => segment.charAt(0).toUpperCase() + segment.slice(1))
    .join(" / ");

  return (
    <header className="container mx-auto flex h-14 items-center px-6 lg:px-0">
      <div className="flex flex-1 items-center gap-2">
        <SidebarTrigger />

        <Separator orientation="vertical" className="hidden sm:block mr-2 h-4" />

        <Breadcrumb className="hidden sm:block">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbPage className="line-clamp-1">
                {currentPage || "Home"}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="ml-auto flex items-center space-x-2">
        <RoleDropDown />
        <ModeToggle />
        <SearchForm />
      </div>
    </header>
  );
};

