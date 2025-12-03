import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'
import { SignInWithEmail } from '@/utils/api/actions/sign-in-with-email'
import { InputField } from '../fields/input-field'
import { Button } from '../ui/button'
import { Form } from '../ui/form'
import { Spinner } from '../ui/spinner'

const formSchema = z.object({
  email: z.email(),
  password: z.string(),
})

type FormData = z.infer<typeof formSchema>

export function SignInForm() {
  const [loading, setLoading] = useState(false)

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const onFormSubmit = form.handleSubmit(async (data: FormData) => {
    setLoading(true)
    try {
      await SignInWithEmail(data)
      toast.success('Deu bom!')
    } catch (error) {
      console.error(error)
      toast.error('Deu ruim...')
    } finally {
      setLoading(false)
    }
  })

  return (
    <Form {...form}>
      <form onSubmit={onFormSubmit} className="w-full space-y-4">
        <InputField
          control={form.control}
          name="email"
          type="email"
          label="Email"
          placeholder="email@example.com"
        />
        <InputField
          control={form.control}
          name="password"
          type="password"
          label="Password"
          placeholder=""
        />
        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? (
            <Spinner className="size-4 text-muted-foreground" />
          ) : (
            'Sign in'
          )}
        </Button>
      </form>
    </Form>
  )
}
