import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { useI18n } from '@/hooks/use-i18n'
import { InputField } from '../fields/input-field'
import { Button } from '../ui/button'
import { Form } from '../ui/form'
import { Spinner } from '../ui/spinner'

const formSchema = z.object({
  email: z.email(),
  name: z.string(),
  username: z.string(),
  password: z.string(),
  confirmPassword: z.string(),
})

type FormData = z.infer<typeof formSchema>

export function SignUpForm() {
  const { t } = useI18n()

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      name: '',
      username: '',
      password: '',
      confirmPassword: '',
    },
  })

  const onFormSubmit = form.handleSubmit(async (values: FormData) => {
    console.log(values)
  })

  const { isSubmitting } = form.formState

  return (
    <Form {...form}>
      <form onSubmit={onFormSubmit} className="space-y-4 w-full">
        <InputField
          control={form.control}
          name="email"
          type="email"
          label="Email"
          placeholder="seu@email.com"
        />
        <InputField
          control={form.control}
          name="name"
          type="name"
          label="Seu nome"
          placeholder="Digite seu nome completo"
        />
        <InputField
          control={form.control}
          name="username"
          type="username"
          label="Nome de usuário"
          placeholder="nomexemplo-sobrenome"
        />
        <InputField
          control={form.control}
          name="password"
          type="password"
          label="Senha"
        />
        <InputField
          control={form.control}
          name="password"
          type="password"
          label="Confirmar senha"
        />
        <Button
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
