import { HTMLInputTypeAttribute } from 'react'
import { Control } from 'react-hook-form'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form'
import { Input } from '../ui/input'

interface InputFieldProps {
  // biome-ignore lint/suspicious/noExplicitAny: FormControl
  control: Control<any>
  name: string
  label?: string
  placeholder?: string
  defaultValue?: string
  disabled?: boolean
  type: HTMLInputTypeAttribute
}

export function InputField({ ...props }: InputFieldProps) {
  return (
    <FormField
      control={props.control}
      name={props.name}
      defaultValue={props.defaultValue}
      disabled={props.disabled}
      render={({ field }) => (
        <FormItem className="space-y-1">
          <FormLabel className="text-sm">{props.label}</FormLabel>
          <FormControl>
            <Input
              {...field}
              type={props.type}
              autoFocus={false}
              placeholder={props.placeholder}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
