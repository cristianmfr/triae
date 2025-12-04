import { Link } from '@tanstack/react-router'
import { StartSignUpForm } from '@/components/forms/start-sign-up-form'
import { Label } from '@/components/ui/label'
import { useI18n } from '@/hooks/use-i18n'

export function AuthSignUpStart() {
  const { t } = useI18n()

  return (
    <div className="flex flex-col gap-4 w-72 items-center">
      <div className="flex flex-col gap-1 items-center text-center">
        <Label className="text-lg font-semibold">{t('signup.title')}</Label>
        <Label className="text-sm font-normal text-muted-foreground">
          {t('signup.message')}
        </Label>
      </div>
      <StartSignUpForm />
      <div className="flex items-center gap-1">
        <Link
          to="/login"
          className="cursor-pointer text-muted-foreground hover:text-white hover:underline font-normal text-sm"
        >
          {t('auth.methods.email.back')}
        </Link>
      </div>
    </div>
  )
}
