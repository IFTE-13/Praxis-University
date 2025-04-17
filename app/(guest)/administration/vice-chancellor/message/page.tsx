import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { universityName } from "@/constants/app";
import Image from "next/image";

export default function Component() {
    return (
          <div>   
            <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
              <MaxWidthWrapper>
                <div className="container mx-auto grid items-center gap-10 px-4 md:px-6 lg:grid-cols-2">
                  <div>
                    <Image
                      src="https://github.com/shadcn.png"
                      alt="CEO"
                      width={400}
                      height={400}
                      className="mx-auto rounded-full"
                      style={{ aspectRatio: "400/400", objectFit: "cover" }}
                    />
                  </div>
                  <div className="space-y-4">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">A Message from the <br /> Vice Chancellor</h1>
                    <div className="text-muted-foreground">
                      <h2 className="text-xl font-semibold">Dr. John Doe</h2>
                      <p className="text-sm">Vice Chancellor</p>
                    </div>
                  </div>
                </div>
              </MaxWidthWrapper>
            </section>
            <MaxWidthWrapper>
            <section className="w-full py-12 md:py-24 lg:py-32">
              <div className="container mx-auto px-4 md:px-6">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Vision for the Future</h2>
                  </div>
                  <div className="space-y-4 text-muted-foreground">
                    <p className="text-justify">
                    {universityName} located at Chittagong is a new generation private university committed to excellence in higher education and research. The vision of this university is to make it a global standard center of excellence through education, research and service. The society the way it is changing will have a profound impact on the university education. Transformative education to change the society as it demands is our mission. In a world where change is the “norm”, there is one thing for certain-knowledge however, will be a key resource and will be highly sought within our region and around the globe. Knowledge has no boundary and the university is meant to create knowledge and develop skilled human resources those who will contribute to the advancement of knowledge and betterment of the society. This is, however, a daunting task to achieve all the attributes to perform such sacred duties to the society and the nation as a whole. The most challenging part of all the universities is to help to generate intellectual property which will create new jobs and to educate and train people to work in the fields where they will be valued both for their specialized knowledge and their ability to research, communicate and solve problems.
                    </p>
                    <p className="text-justify">
                    Considering all these challenges of the fast changing world, {universityName} has chalked out distinctive plans delineating the responsibilities of the students, faculty and the staffs to meet the required benchmark of quality education. Our courses are tailor made and designed in the context of global need. We follow a vibrant and innovative course curriculum for our students and provide all state of the art facilities to ensure quality education. We welcome your interest and invite your further query and hope that you might join us later as one of the elite students of Port City International University.
                    </p>
                    <p className="font-semibold pt-8">Vice Chancellor</p>
                    <p className="font-semibold">Professor, Department of Microbiology</p>
                    <p className="font-semibold">B.Sc.(Hons.), M.Sc,(DU), Ph.D. (Mysore University, Singapore),</p>
                    <p className="font-semibold">Post-doc. (Hokkaido University, Japan)</p>
                  </div>
                </div>
              </div>
            </section>
            </MaxWidthWrapper>
          </div>
      
    )
  }