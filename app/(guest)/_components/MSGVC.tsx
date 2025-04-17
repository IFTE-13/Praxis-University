import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { universityName } from "@/constants/app"
import MaxWidthWrapper from "@/components/MaxWidthWrapper"

export default function MSGVC() {
  return (
    <MaxWidthWrapper>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="grid gap-4 lg:grid-cols-2">
          <div className="flex flex-col items-center justify-center space-y-4">
            <Avatar className="h-80 w-80">
              <AvatarImage src="https://github.com/shadcn.png" alt="Vice Chancellor" />
              <AvatarFallback>NA</AvatarFallback>
            </Avatar>
            <div className="space-y-1 text-center">
              <h2 className="text-3xl font-bold">Dr. John Doe</h2>
              <p className="text-muted-foreground">Vice Chancellor</p>
            </div>
          </div>
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">A Message from the <br /> Vice Chancellor</h1>
            <p className="text-muted-foreground md:text-xl text-justify">
            {universityName} located at Chittagong is a new generation private university committed to excellence in higher education and research. The vision of this university is to make it a global standard center of excellence through education, research and service. The society the way it is changing will have a profound impact on the university education. Transformative education to change the society as it demands is our mission. In a world where change is the “norm”, there is one thing for certain-knowledge.
            </p>
            <Link 
                className={`${buttonVariants({
                    variant: "default",
                    size: "sm",
                })}`}
                href="/administration/vice-chancellor/message"
            >
                learn more 
            </Link>
          </div>
        </div>
      </section>
    </MaxWidthWrapper>
  )
}
