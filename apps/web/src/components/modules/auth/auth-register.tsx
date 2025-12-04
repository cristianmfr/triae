import { SignUpForm } from '@/components/forms/sign-up-form'
import { Label } from '@/components/ui/label'
import { useI18n } from '@/hooks/use-i18n'

export function AuthRegister() {
  const { t } = useI18n()

  return (
    <div className="flex flex-col gap-4 w-72 items-center">
      <div className="flex flex-col gap-1 items-center text-center">
        <Label className="text-lg font-semibold">{t('signup.title')}</Label>
        <Label className="text-sm font-normal text-muted-foreground">
          {t('signup.message')}
        </Label>
      </div>
      <SignUpForm />
    </div>
  )
}
