export type AlumniEmploymentSectorType = {
    sectorName: string;
    alumniEmployedPercentage: number;
    companiesInSector: number;
    randomValue: number;
};

export type ConvocatonDataType = {
    year: number;
    total: number;
    male: number;
    female: number;
    undergraduate: number,
    graduate: number,
    venue: string,
    date: string
};

export interface DepartmentListDataType {
    departments: {
      [field: string]: string[];
    };
}

export interface Notices {
  id: string;
  title: string;
  desc: string;
  date: string;
  time: string;
  img: string;
}

export interface QuickLink {
  title: string;
  icon: React.ComponentType<{ size?: number }>
  href: string;
}

