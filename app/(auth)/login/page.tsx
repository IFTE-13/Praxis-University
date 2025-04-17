import { Button } from "@/components/ui/button"
import { universityName } from "@/constants/app"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from "next/link"
import LoginForm from "@/components/forms/LoginForm";
import Image from "next/image";
import img from "@/public/img.png"

export default function Component() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="flex justify-center items-center h-[calc(100vh-3.55rem)] px-4">
        <Card className="container mx-auto py-0 rounded-sm">
          <div className="max-w-full grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
          <div className="relative flex items-center justify-center bg-gray-100">
            <Image 
            src={img} 
            alt="University Campus" 
            className="absolute inset-0 object-cover opacity-50" 
            fill={true}/>
            <div className="relative z-10 max-w-md space-y-4 px-4 py-12 sm:px-6 lg:px-8">
                <span className="text-2xl font-bold tracking-tight text-gray-900 capitalize">{universityName}</span>

              <p className="text-lg font-medium text-gray-700 dark:text-gray-400">
                Welcome to {universityName} portal.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center bg-white">
            <div className="w-full md:w-1/2 lg:w-1/2 px-4 py-12 lg:px-8">
            <Card className="max-w-[450px] h-9/12">
                <CardHeader>
                    <CardTitle className="mb-4"><Link href={"/"} className='hover:text-white/60'>{universityName}</Link></CardTitle>
                    <CardDescription>sign in with your organizational id number and credientials</CardDescription>
                </CardHeader>
                <CardContent>
                  <LoginForm />
                </CardContent>
                <CardFooter className="flex flex-col justify-start items-start">
                    <Button>login</Button>
                    <p className="text-black transition-colors mt-4 text-sm">All rights reseved by <Link href={"/"} className='hover:text-black/60'>{universityName}</Link>@{year} </p>
                </CardFooter>
            </Card>
            </div>
          </div>
          </div>
        </Card>
    </div>
  )
}