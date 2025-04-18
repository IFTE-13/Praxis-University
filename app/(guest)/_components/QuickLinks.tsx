import Link from 'next/link'
import React from 'react'
import { Card, CardDescription } from '@/components/ui/card'
import { quickLinks } from './types-data'

export default function QuickLinks() {
  return (
    <div className="container mx-auto px-6 my-12">
      <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-8 gap-4">
        {quickLinks.map((link, idx) => (
          <Link href={link.href} key={idx}>
            <Card className="p-4 h-40 flex justify-center items-center hover:shadow-lg dark:shadow-none dark:hover:bg-card/20 transition-all duration-300 cursor-pointer">
              <div className="flex flex-col items-center space-y-2">
                <link.icon size={30} />
                <CardDescription className="text-center font-medium">
                  {link.title}
                </CardDescription>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
