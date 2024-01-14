"use client"

import * as React from "react"
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
import { Circle } from "lucide-react"

import { cn } from "@/lib/utils"
import {
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormControl,
} from "./form"
const RadioGroup_form = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root> & {
    control: any
    name: string
  }
>(({ className, control, name, ...props }, ref) => {
  return (
    <FormField

      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex flex-col">
          <FormControl>
            <RadioGroupPrimitive.Root
              onValueChange={field.onChange}
              defaultValue={field.value}
              className={cn("flex flex-col gap-4", className)}
              {...props}
              {...field}
              ref={ref}

            />
            
          </FormControl>

          <FormMessage />
        </FormItem>
      )}
    />
  )
})
RadioGroup_form.displayName = RadioGroupPrimitive.Root.displayName

const RadioGroupItemForm = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, ...props }, ref) => {
  return (

    <div className={cn("flex flex-row", className)}>
      <RadioGroupPrimitive.Item
        ref={ref}
        className={cn(
          "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        )}
        {...props}
      >
        <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
          <Circle className="h-2.5 w-2.5 fill-current text-current" />
        </RadioGroupPrimitive.Indicator>



      </RadioGroupPrimitive.Item>
      <FormLabel>{props.children}</FormLabel>
    </div>
  )
})
RadioGroupItemForm.displayName = RadioGroupPrimitive.Item.displayName

export { RadioGroup_form, RadioGroupItemForm }
