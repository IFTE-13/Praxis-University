import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { notices } from "@/dummyData"
import { Calendar1, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Notices() {
  return (
    <div className="container mx-auto my-12">
        <div className="flex flex-row justify-between items-center px-6">
            <h1 className="font-semibold leading-none tracking-tight text-2xl">Notices</h1>
            <div className='flex space-x-2'>
                <Button 
                variant="outline" 
                className="w-full sm:w-auto flex items-center justify-center"
                >
                    View all news
                </Button>
                <Button 
                className="w-full sm:w-auto flex items-center justify-center"
                >
                    View all notice
                </Button>
            </div>
        </div>
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 md:p-6">
            {notices.map((notice) => (
                <Card key={notice.id}>
                <Image
                    src={notice.img || "/placeholder.svg"}
                    alt={`${notice.title} poster`}
                    width="200"
                    height="300"
                    className="object-cover w-full h-60"
                    style={{ aspectRatio: "200/300", objectFit: "cover" }}
                />
                <CardContent className="p-4">
                    <CardTitle className="text-md text-justify">{notice.title}</CardTitle>
                    <div className="mt-8 flex justify-between">
                    <div className="flex flex-row gap-x-1">
                        <Clock size={20}/> 
                        {notice.time}
                    </div>
                    <div className="flex flex-row gap-x-1">
                        <Calendar1 size={20}/> 
                        {notice.date}
                    </div>
                    </div>
                </CardContent>
                </Card>
            ))}
        </section>
    </div>
  )
}
