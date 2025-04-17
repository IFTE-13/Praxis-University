import * as React from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function LoginForm() {
  return (
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="id">id</Label>
              <Input id="id" placeholder="user id" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">password</Label>
              <Input id="password" placeholder="Password" />
            </div>
          </div>
        </form>
  )
}
