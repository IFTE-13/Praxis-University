export type IMenuType = {
    label: string;
    link?: string;
    isSubmenu?: boolean;
    subItems?: IMenuType[];
  };