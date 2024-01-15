"use client"

import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { Check } from "lucide-react"

import { cn } from "@/lib/utils"
import {
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormControl,
} from "./form"

export interface CheckboxProps {
  control: any
  name: string
  description: string
  value_checkbox: string
}

const CheckboxForm = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> & CheckboxProps


>(({ control, name, value_checkbox, description, className, ...props }, ref) => (


  <FormField
    control={control}
    name={name}
    render={({ field }) => (
      <FormItem>
        <div className={cn("flex flex-row items-start gap space-y-0", className)}>

          <FormControl>

            <CheckboxPrimitive.Root

              className={cn(
                "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground", className
              )}
              checked={field.value?.includes(value_checkbox)}
              onCheckedChange={(checked: any) => {
                return checked
                  ? field.onChange([...field.value, value_checkbox])
                  : field.onChange(
                    field.value?.filter(
                      (value: string) => value != value_checkbox
                    )
                  )
              }}

              {...props}

              {...field}
              ref={ref}






            >
              <CheckboxPrimitive.Indicator
                className={cn("flex items-center justify-center text-current")}

              >
                <Check className="h-4 w-4" />
              </CheckboxPrimitive.Indicator>

            </CheckboxPrimitive.Root>


          </FormControl>

          <FormLabel>{description}</FormLabel>
        </div>

        <FormMessage />
      </FormItem >
    )}
  />
))
CheckboxForm.displayName = CheckboxPrimitive.Root.displayName

export { CheckboxForm }
