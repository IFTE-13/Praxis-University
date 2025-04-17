import { AlumniEmploymentSectorData } from "@/staticData/AlumniData";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

export function AlumniDetailsTable() {
  return (
    <Card className="my-10">
        <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
            <div className="flex flex-1 flex-col justify-center gap-1 px-4 py-5 sm:py-6 capitalize">
                <CardTitle>alumni employment data across various sectors</CardTitle>
            </div>
        </CardHeader>
        <Table>
            <TableHeader>
                <TableRow>
                <TableHead>Sector Name</TableHead>
                <TableHead className="text-center">alumni employed (%)</TableHead>
                <TableHead className="text-center">no. of companies</TableHead>
                <TableHead className="text-right">total</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {AlumniEmploymentSectorData.map((sector, index) => (
                <TableRow key={index}>
                    <TableCell className="font-medium">{sector.sectorName}</TableCell>
                    <TableCell className="text-center">{sector.alumniEmployedPercentage}%</TableCell>
                    <TableCell className="text-center">{sector.companiesInSector}</TableCell>
                    <TableCell className="text-right">{sector.randomValue}</TableCell>
                </TableRow>
                ))}
            </TableBody>
        </Table>
    </Card>
  );
}
