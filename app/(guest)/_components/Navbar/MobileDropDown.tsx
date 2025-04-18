import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import Link from "next/link";
import { AlignRight } from "lucide-react";
import { IMenuType } from "./types";
import { menuItems } from "./data";

export function MobileDropDown() {
  const renderMenuItem = (item: IMenuType, index: number) => {
    if (item.isSubmenu) {
      return (
        <DropdownMenuSub key={index}>
          <DropdownMenuSubTrigger>
            {item.link ? (
              <Link href={item.link}>{item.label}</Link>
            ) : (
              <span>{item.label}</span>
            )}
          </DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent>
              {item.subItems && item.subItems.map((subItem: IMenuType, subIndex: number) => {
                if (subItem.isSubmenu) {
                  return (
                    <DropdownMenuSub key={subIndex}>
                      <DropdownMenuSubTrigger>
                        {subItem.link ? (
                          <Link href={subItem.link}>{subItem.label}</Link>
                        ) : (
                          <span>{subItem.label}</span>
                        )}
                      </DropdownMenuSubTrigger>
                      <DropdownMenuPortal>
                        <DropdownMenuSubContent>
                          {subItem.subItems && subItem.subItems.map((thirdItem: IMenuType, thirdIndex: number) => (
                            <DropdownMenuItem key={thirdIndex}>
                              {thirdItem.link ? (
                                <Link href={thirdItem.link}>{thirdItem.label}</Link>
                              ) : (
                                <span>{thirdItem.label}</span>
                              )}
                            </DropdownMenuItem>
                          ))}
                        </DropdownMenuSubContent>
                      </DropdownMenuPortal>
                    </DropdownMenuSub>
                  );
                }
                return (
                  <DropdownMenuItem key={subIndex}>
                    <Link href={subItem.link || ""}>{subItem.label}</Link>
                  </DropdownMenuItem>
                );
              })}
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
      );
    }

    return (
      <DropdownMenuItem key={index}>
        <Link href={item.link || ""}>{item.label}</Link>
      </DropdownMenuItem>
    );
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="lg:hidden md:block"
        >
          <AlignRight />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuGroup>
          {menuItems.map(renderMenuItem)}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}