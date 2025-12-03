'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import z from 'zod'
import { useI18n } from '@/locale/client'
import { Button } from '../ui/button'
import { Form, FormControl, FormField, FormItem, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'

const formSchema = z.object({
  name: z.string(),
  description: z.string().optional(),
})

export function SetupForm() {
  const t = useI18n()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      description: '',
    },
  })

  const onSubmit = form.handleSubmit(
    async (values: z.infer<typeof formSchema>) => {
      console.log(values)
      // try {
      //   await createUserWorkspace({
      //     name,
      //     description,
      //     slug: generateSlug(name),
      //   })
      //   toast.success(t('toast.success.setup.message'))
      // } catch (error) {
      //   toast.error('toast.error.setup.message')
      //   console.error(error)
      // }
    },
  )

  return (
    <Form {...form}>
      <form onSubmit={onSubmit} className="space-y-4 w-full">
        <FormField
          name="name"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type="text"
                  placeholder={t('forms.setup.workspace.name')}
                  className="h-11"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="description"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  placeholder={t('forms.setup.workspace.description')}
                  className="min-h-20 resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button size="lg" className="w-full" type="submit">
          {t('forms.setup.workspace.submit')}
        </Button>
      </form>
    </Form>
  )
}
