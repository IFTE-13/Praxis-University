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
import { MenuItem, SubMenuItems } from "@/constants/SubNavigationList"
import Link from "next/link";
  
export function MobileDropDown() {
    const renderMenuItem = (item: MenuItem, index: number) => {
      if (item.isSubmenu) {
        return (
          <DropdownMenuSub key={index}>
            <DropdownMenuSubTrigger>
              { item.link ? <Link href={item.link} legacyBehavior><a>{item.label}</a></Link> : <span>{item.label}</span>}
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                {item.subItems && item.subItems.map((subItem: MenuItem, subIndex: number) => {
                  if (subItem.isSubmenu) {
                    return (
                      <DropdownMenuSub key={subIndex}>
                        <DropdownMenuSubTrigger>
                          { subItem.link ? <Link href={subItem.link} legacyBehavior><a>{subItem.label}</a></Link> : <span>{subItem.label}</span>}
                        </DropdownMenuSubTrigger>
                        <DropdownMenuPortal>
                          <DropdownMenuSubContent>
                            {subItem.subItems && subItem.subItems.map((thirdItem: MenuItem, thirdIndex: number) => (
                              <DropdownMenuItem key={thirdIndex}>
                                { thirdItem.link ? <Link href={thirdItem.link} legacyBehavior><a>{thirdItem.label}</a></Link> : <span>{thirdItem.label}</span>}
                              </DropdownMenuItem>
                            ))}
                          </DropdownMenuSubContent>
                        </DropdownMenuPortal>
                      </DropdownMenuSub>
                    );
                  }
                  return (
                    <DropdownMenuItem key={subIndex}>
                      <Link key={subIndex} href={subItem.link || ""} legacyBehavior><a>{subItem.label}</a></Link>
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
          <Link href={item.link || ""} legacyBehavior><a>{item.label}</a></Link>
        </DropdownMenuItem>
      );
    };
  
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button 
            
            size="sm"
            className="lg:hidden md:block"
          >
            more
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuGroup>
            {SubMenuItems[0].items.map(renderMenuItem)}
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }