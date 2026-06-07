import { Search } from "lucide-react"

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function SearchForm({ ...props }: React.ComponentProps<"form">) {
  return (
    <>
    <form {...props} className="hidden sm:block">
      <div className="py-0">
        <div className="relative">
          <Label htmlFor="search" className="sr-only">
            Search
          </Label>
          <Input
            id="search"
            placeholder="Search"
            className="pl-8"
          />
          <Search className="pointer-events-none absolute left-2 top-1/2 size-4 -translate-y-1/2 select-none opacity-50" />
        </div>
      </div>
      
    </form>
      <Button className="sm:hidden p-2" variant="outline" size="icon">
          <Search className="w-5 h-5" />
      </Button>
    </>
  )
}
