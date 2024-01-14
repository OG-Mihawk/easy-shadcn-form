import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Form } from "@/components/ui/form"
import { Input_Form } from "@/components/ui/input_form"
import { Button } from "@/components/ui/button"
import { SelectForm } from "./components/ui/select_form"
import { SelectItem } from "./components/ui/select"
import { Calendar_Form } from "./components/ui/calendar_form"
import { RadioGroupItemForm, RadioGroup_form } from "./components/ui/radio-group_form"
import { Checkbox_Form } from "./components/ui/checkbox_form"
const formSchema = z.object({
  username: z.string().min(2).max(50),
  select: z.string(),
  date: z.date(),
  radio: z.string(),
  mobile: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
  }),



})

function App() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      mobile: [],
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }


  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <Input_Form control={form.control} name="username" label="Username" />
          <SelectForm control={form.control} name="select" label="Select" placeholder="Select a choice">
            <SelectItem value="1">Choice 1</SelectItem>
            <SelectItem value="2">Choice 2</SelectItem>
            <SelectItem value="3">Choice 3</SelectItem>
          </SelectForm>
          <Calendar_Form control={form.control} name="date" label="Date" />
          <RadioGroup_form control={form.control} name="radio">
            <RadioGroupItemForm value="1">Choice 1</RadioGroupItemForm>
            <RadioGroupItemForm value="2">Choice 2</RadioGroupItemForm>
            <RadioGroupItemForm value="3">Choice 3</RadioGroupItemForm>
          </RadioGroup_form>
          <Checkbox_Form control={form.control} name="mobile" value_checkbox="mobile" description="Mobdsqdqsile" />

          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </>
  )
}

export default App
