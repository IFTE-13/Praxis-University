import { Facebook, Icon } from "lucide-react";

export type ILinkType = {
    label: string;
    href: string;
};
  
export type IItemType = {
    title: string;
    links: ILinkType[];
};

export type ISocialType = {
    href: string;
    icon: React.ElementType;
    label: string;
  };