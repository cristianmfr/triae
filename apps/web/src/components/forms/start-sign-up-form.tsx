import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { useI18n } from '@/hooks/use-i18n'
import { Button } from '../ui/button'
import { Form, FormControl, FormField, FormItem, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
import { Spinner } from '../ui/spinner'

const formSchema = z.object({
  email: z.email(),
})

type FormData = z.infer<typeof formSchema>

export function StartSignUpForm() {
  const { t } = useI18n()

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
    },
  })

  const onFormSubmit = form.handleSubmit(async ({ email }: FormData) => {
    console.log(email)
  })

  const { isSubmitting } = form.formState

  return (
    <Form {...form}>
      <form onSubmit={onFormSubmit} className="space-y-4 w-full">
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
        <Button
          size="lg"
          className="w-full"
          variant="secondary"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <Spinner className="size-4 text-muted-foreground" />
          ) : (
            t('auth.signup.button')
          )}
        </Button>
      </form>
    </Form>
  )
}
