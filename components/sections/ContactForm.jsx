'use client'
import { useState } from "react"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Checkbox } from "../ui/checkbox"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {budgetItems} from "@/components/constants/FormItems"
import { servicesDetails } from "@/lib"

const formSchema = z.object({
  // fullName: z.string().min(1),
  // images: z.object({ url: z.string() }).array(),
  // price: z.coerce.number().min(1),
  // email: z.string().min(1),
  // number: z.string().min(1),
  // companyName: z.string().min(1),
  // service: z.string().min(1),

  // budget: z.string().min(1),
  fullName : z.string().min(2, {
    message: "please complete this required field"
  }),
  email: z.string().min(2, {
      message: "please complete this required field",
      
  }),
  number: z.string().min(2, {
    message: "please complete this required field",
    
}),
companyName: z.string().min(2, {
  message: "please complete this required field",
  
}),
service: z.string().min(2, {
  message: "please complete this required field",
  
}),
budget: z.string().min(2, {
  message: "please complete this required field",
  
}),
  
});


export default function contactForm(){

      const [loading, setLoading] = useState(false);


      const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
          fullName: "",
          email: "",
          number: "",
          companyName: "",
          service: "",
          budget: "",
        },
      })
      const onSubmit = () => {
        // Handle form submission logic here
        console.log('mmmm');
      }



return (
  <>
    <Form  
    {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full leading-[20px] font-raleway font-medium text-[15px]">
        
        <div className="flex flex-col gap-4">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-foreground">Full Name</FormLabel>
                <FormControl>
                  <Input className="rounded-2xl border bg-foreground text-slate-900" disabled={loading} placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-foreground">Email</FormLabel>
                <FormControl>
                  <Input className="rounded-2xl border bg-foreground text-slate-900" disabled={loading}  {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="number"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-foreground">Whatspp Number</FormLabel>
                <FormControl>
                  <Input className="rounded-2xl border bg-foreground text-slate-900" type="number" disabled={loading} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="companyName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-foreground">Company Name</FormLabel>
                <FormControl>
                  <Input className="rounded-2xl border bg-foreground text-slate-900" disabled={loading} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
        <div className=" flex flex-row gap-10">
          <FormField
            control={form.control}
            name="service"
            render={({ field }) => (
              <FormItem className="">
                <div className="space-y-1 leading-none">
                  <FormLabel className="text-foreground">
                    Select Service
                  </FormLabel>
                  
                </div>

                {servicesDetails.map((item) => (
                <FormField
                  key={item.id}
                  control={form.control}
                  name="service"
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={item.id}
                        className="flex  items-start space-x-3 space-y-0"
                      >
                        <FormControl>
                          <Checkbox className="bg-foreground text-slate-900"
                            checked={field.value?.includes(item.id)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...field.value, item.id])
                                : field.onChange(
                                    field.value?.filter(
                                      (value) => value !== item.id
                                    )
                                  )
                            }}
                          />
                        </FormControl>
                        <FormLabel className="font-normal leading-[18px] text-foreground">
                          {item.title}
                        </FormLabel>
                      </FormItem>
                    )
                  }}
                />
              ))}
                <div className="space-y-1 leading-none">
                  
                  
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="budget"
            render={({ field }) => (
              <FormItem className="">
                <div className="space-y-1 leading-none">
                  <FormLabel className="text-foreground">
                    Monthly Budget
                  </FormLabel>
                  
                </div>

                {budgetItems.map((item) => (
                <FormField
                  key={item.id}
                  control={form.control}
                  name="service"
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={item.id}
                        className="flex  items-start space-x-3 space-y-0"
                      >
                        <FormControl>
                          <Checkbox className="bg-foreground text-slate-900"
                            checked={field.value?.includes(item.id)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...field.value, item.id])
                                : field.onChange(
                                    field.value?.filter(
                                      (value) => value !== item.id
                                    )
                                  )
                            }}
                          />
                        </FormControl>
                        <FormLabel className="font-normal leading-[18px] text-foreground">
                          {item.range}
                        </FormLabel>
                      </FormItem>
                    )
                  }}
                />
              ))}
                <div className="space-y-1 leading-none">
                  
                  
                </div>
              </FormItem>
            )}
          />
          </div>  
        </div>
        <Button disabled={loading} className="hover:bg-orange-600 ml-auto" type="submit">
          Submit
        </Button>
      </form>
    </Form>
  </>
);
};