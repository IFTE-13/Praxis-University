import {
    Table,
    TableBody,
    TableCell,
    TableRow,
  } from "@/components/ui/table"
  import { Card, CardTitle } from "@/components/ui/card"
  import { departmentList } from "@/staticData/DepartmentData"
import React from "react"
  
  export function DepartmentListTable() {
    return (
      <div className="mb-10">
  {Object.entries(departmentList.departments).map(([field, departments], idx) => (
    <div key={idx}>
      <CardTitle className="lowercase">{field}</CardTitle>
      <Card className="my-6">
        <Table>
          <TableBody>
            {departments.map((department, idx) => (
              <TableRow key={idx}>
                <TableCell className="pl-4 lowercase">{department}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  ))}
</div>
    )
  }