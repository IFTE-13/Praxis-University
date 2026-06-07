import { columns } from '@/components/tables/teacher/columns'
import { DataTable } from '@/components/tables/teacher/teachers-table'
import { payments } from '@/data/teachersData'
import { Payment } from '@/utils/types'


async function getData(): Promise<Payment[]> {
  const data = payments;
  return data;
}

export default async function page() {
  const data = await getData()
  return (
    <div className="container mx-auto px-6 lg:px-0 py-6">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
