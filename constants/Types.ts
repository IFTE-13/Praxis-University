export type AlumniEmploymentSectorType = {
    sectorName: string;
    alumniEmployedPercentage: number;
    companiesInSector: number;
    randomValue: number;
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

