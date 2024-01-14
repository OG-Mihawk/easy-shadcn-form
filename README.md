
# Easy Shadcn Form Library Documentation

## Install and configure Vite.

Before using this library, ensure that your Shadcn environment is configured. Follow this link to install and configure Vite: [Vite Installation](https://ui.shadcn.com/docs/installation/vite)

### Install this library

As this is the first version of the library, you need to install it from GitHub. If there are many requests, future updates may be released for all components.

```bash
git clone [link]
```

This will create a folder named "easy-shadcn-form" in your project. Move only the components' files into your "src" folder.

## Requirements

You need to install the `form` package from the Shadcn library.

```bash
npx shadcn-ui@latest add form
```

For each component, detailed instructions can be found in the "README.md" file within the "components" folder. Each component shares the same variable/props structure.

### Best to do

When using or creating a form, use the `App.tsx` file or create a new file with a similar structure.

## Input

### How to use it?

No additional installation is required; just import the component into your file.

### Example

To use the input component, move the "Input_form.tsx" file from the "components" directory to your "src" folder.

```tsx
<Input_Form control={form.control} name="username" label="Username" />
```

## Select

### How to use it?

Install the `select` package from Shadcn.

```bash
npx shadcn-ui@latest add select
```

### Example

```tsx
<SelectForm control={form.control} name="choice" label="Choice" placeholder="Select a choice">
    <SelectItem value="1">Choice 1</SelectItem>
    <SelectItem value="2">Choice 2</SelectItem>
    <SelectItem value="3">Choice 3</SelectItem>
</SelectForm>
```

## Calendar

### How to use it?

Install the `calendar` and `popover` packages from Shadcn, as well as `@radix-ui/react-icons`.

```bash
npx shadcn-ui@latest add calendar
npx shadcn-ui@latest add popover
npm install @radix-ui/react-icons
```

### Example

```tsx
<Calendar_Form placeholder="Choose a date" control={form.control} name="date" label="Date" />
```

## Radio group

### How to use it?

Install the `radio-group` package from Shadcn.

```bash
npx shadcn-ui@latest add radio-group
```

### Example

```tsx
<RadioGroup_form control={form.control} name="radio">
    <RadioGroupItemForm value="1">Choice 1</RadioGroupItemForm>
    <RadioGroupItemForm value="2">Choice 2</RadioGroupItemForm>
    <RadioGroupItemForm value="3">Choice 3</RadioGroupItemForm>
</RadioGroup_form>
```

## Checkbox

### How to use it?

Install the `checkbox` package from Shadcn.

```bash
npx shadcn-ui@latest add checkbox
```

### Example

```tsx
<Checkbox_Form control={form.control} name="mobile" value_checkbox="mobile" description="Mobile" />
```

For stability, ensure that the variable `mobile` is a list and is initialized as follows:

```tsx
const formSchema = z.object({
    mobile: z.array(z.string()).refine((value) => value.some((item) => item), {
        message: "You have to select at least one item.",
    }),
});

const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
        username: "",
        mobile: [],
    },
});
```

Feel free to collaborate and improve the library. If you have any questions or suggestions, don't hesitate to reach out. You will find my contact information on my GitHub profile.
'