"use client";

import * as React from "react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { MenuItem, SubMenuItems } from "@/constants/SubNavigationList";

const renderMenuItems = (items: MenuItem[]) => {
  return items.map((item, index) => (
    <React.Fragment key={index}>
      {item.isSubmenu && item.subItems && item.subItems.length > 0 ? (
        <MenubarSub>
          <MenubarSubTrigger>{item.label}</MenubarSubTrigger>
          <MenubarSubContent>{renderMenuItems(item.subItems)}</MenubarSubContent>
        </MenubarSub>
      ) : (
        <MenubarItem asChild>
          <a href={item.link}>{item.label}</a>
        </MenubarItem>
      )}
    </React.Fragment>
  ));
};

export function SubNavigation() {
  return (
    <Menubar className="border-none bg-none">
      {SubMenuItems[0].items.map((menuItem, index) => (
        <React.Fragment key={index}>
          {menuItem.isSubmenu && menuItem.subItems && menuItem.subItems.length > 0 ? (
            <MenubarMenu>
              <MenubarTrigger>{menuItem.label}</MenubarTrigger>
              <MenubarContent>
                {renderMenuItems(menuItem.subItems)}
              </MenubarContent>
            </MenubarMenu>
          ) : (
            <MenubarMenu>
              <MenubarTrigger asChild>
                <a href={menuItem.link} className="cursor-pointer">
                  {menuItem.label}
                </a>
              </MenubarTrigger>
            </MenubarMenu>
          )}
        </React.Fragment>
      ))}
    </Menubar>
  );
}