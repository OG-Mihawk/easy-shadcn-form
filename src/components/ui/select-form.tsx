"use client"
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { cn } from "@/lib/utils"
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
} from "@/components/ui/select"
import { ReactNode } from "react"

interface SelectFormProps extends React.ComponentPropsWithoutRef<"select"> {
  control: any;
  name: string;
  children: ReactNode;
  placeholder: string;
  classname?: string;
  label: string;

}

export function SelectForm({ control, className, name, placeholder, label, ...props }: SelectFormProps) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={cn(className)}>
          <FormLabel>{label}</FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {props.children}
            </SelectContent>
            
          </Select>
          
          <FormMessage />
        </FormItem>
      )}
    />

  )
}
