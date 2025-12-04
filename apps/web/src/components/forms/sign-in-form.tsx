import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from '@tanstack/react-router'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'
import { signInWithCredentials } from '@/actions/auth/sign-in-with-credentials'
import { useI18n } from '@/hooks/use-i18n'
import { Button } from '../ui/button'
import { Form, FormControl, FormField, FormItem, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
import { Spinner } from '../ui/spinner'

const formSchema = z.object({
  email: z.email(),
  password: z.string(),
})

type FormData = z.infer<typeof formSchema>

export function SignInForm() {
  const { t } = useI18n()

  const navigate = useNavigate()

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const onFormSubmit = form.handleSubmit(
    async ({ email, password }: FormData) => {
      try {
        await signInWithCredentials({ email, password })
        navigate({ to: '/' })
        toast.success('Deu bom!')
      } catch (error) {
        console.error(error)
        toast.error('Deu ruim...')
      }
    },
  )

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
            t('auth.methods.email.submit')
          )}
        </Button>
      </form>
    </Form>
  )
}
