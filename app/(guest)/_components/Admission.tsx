import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { universityName } from '@/constants/app';

import Link from 'next/link';

interface AdmissionCategory {
  id: string;
  title: string;
  description: string;
  buttonText: string;
  buttonAction: string;
}

const admissionCategories: AdmissionCategory[] = [
  {
    id: "undergraduate",
    title: "Undergraduate",
    description: "Explore our diverse undergraduate programs and start your academic journey.",
    buttonText: "Learn More",
    buttonAction: "/undergraduate"
  },
  {
    id: "graduate",
    title: "Graduate",
    description: "Advance your career with our cutting-edge graduate and professional programs.",
    buttonText: "Discover Programs",
    buttonAction: "/graduate"
  },
  {
    id: "financial-aid",
    title: "Financial Aid",
    description: "Learn about scholarships, grants, and other financial aid opportunities.",
    buttonText: "Explore Options",
    buttonAction: "/financial-aid"
  }
];

export default function Admissions() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Join Our Community</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {admissionCategories.map((category) => (
            <Card key={category.id} className="bg-white text-gray-800">
              <CardHeader>
                <CardTitle>{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{category.description}</p>
                <Button variant="outline" asChild>
                  <a href={category.buttonAction}>{category.buttonText}</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      
      <div className="bg-background py-16">
        <div className="container mx-auto">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-card p-6 shadow-sm">
              <h3 className="text-2xl font-bold">Latest News</h3>
              <p className="mt-4 text-muted-foreground">
                Stay up-to-date with the latest news and events from {universityName}.
              </p>
              <Link
                href="#"
                className="mt-6 inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Read More
              </Link>
            </div>
            <div className="rounded-lg bg-card p-6 shadow-sm">
              <h3 className="text-2xl font-bold">Upcoming Events</h3>
              <p className="mt-4 text-muted-foreground">
                Check out the latest events and activities happening at Acme High School.
              </p>
              <Link
                href="#"
                className="mt-6 inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Explore Events
              </Link>
            </div>
            <div className="rounded-lg bg-card p-6 shadow-sm">
              <h3 className="text-2xl font-bold">Student Achievements</h3>
              <p className="mt-4 text-muted-foreground">
                Celebrate the outstanding achievements of our talented students.
              </p>
              <Link
                href="#"
                className="mt-6 inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                View Achievements
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}