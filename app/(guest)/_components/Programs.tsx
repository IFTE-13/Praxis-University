import { universityName } from "@/constants/app";
import { departmentList } from "@/staticData/DepartmentData";

export default function Programs() {
  return (
    <section className="w-full py-24 bg-gray-100">
      <div className="container mx-auto grid gap-12 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-300 px-3 py-1 text-sm">
              Academic Programs
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Explore Our Diverse Offerings
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {universityName} offers a wide range of undergraduate and graduate programs across various disciplines,
              catering to diverse academic interests and career aspirations.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 md:grid-cols-4 rounded-lg border border-gray-200">
          {Object.entries(departmentList.departments).map(([field], idx) => (
            <div
              key={idx}
              className={`grid gap-1 p-8 md:p-10 relative ${
                idx % 4 !== 3 ? 'border-r border-gray-200' : ''
              } ${
                idx < 3 ? 'border-b border-gray-200' : ''
              }`}
            >
              <h3 className="text-xl font-bold text-center">{field}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
