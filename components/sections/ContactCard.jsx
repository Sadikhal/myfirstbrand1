import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { MapPin } from "lucide-react"
import Link from "next/link"

export function ContactCard({icon,content,href}) {
  return (
    <Card className=" bg-white/50 text-black backdrop-opacity-10 backdrop-invert flex flex-row item-center h-20 p-12 lg:mt-0 mt-4 px-2 sm:px-0">
      
      <CardContent className="text-left ">       
            <div className="flex flex-row gap-5 text-left pt-2 ">
              <div className="text-left text-[#FC8D00] text-[20px] font-[900]" >{icon}</div>
              <a href={href} className="text-slate-900 text-[20px] font-rubik underline hover:no-underline leading[1.2em]">{content}</a>     
            </div>
            
         
    
      </CardContent>
      
    </Card>
  )
}
