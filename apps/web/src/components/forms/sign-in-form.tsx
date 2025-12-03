'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { useI18n } from '@/locale/client'
import { Button } from '../ui/button'
import { Form, FormControl, FormField, FormItem, FormMessage } from '../ui/form'
import { Input } from '../ui/input'

const signInFormSchema = z.object({
  email: z.email(),
  password: z.string(),
})

type SignInFormData = z.infer<typeof signInFormSchema>

export function SignInForm() {
  const t = useI18n()

  const form = useForm<SignInFormData>({
    resolver: zodResolver(signInFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const onSubmit = form.handleSubmit(async (values: SignInFormData) => {
    console.log(values)
    // await signIn({ email, password })
    //   .then(() => {
    //     toast.success('deu bom')
    //   })
    //   .catch((error) => {
    //     console.error(error)
    //     toast.error('ai é foda')
    //   })

    // await checkHasWorkspaces()
  })

  return (
    <Form {...form}>
      <form onSubmit={onSubmit} className="space-y-4 w-full">
        <FormField
          name="email"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type="email"
                  placeholder={t('fields.email.placeholder')}
                  className="h-10"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="password"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type="password"
                  placeholder={t('fields.password.placeholder')}
                  className="h-10"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button size="lg" className="w-full" variant="secondary" type="submit">
          {t('auth.methods.email.submit')}
        </Button>
      </form>
    </Form>
  )
}
