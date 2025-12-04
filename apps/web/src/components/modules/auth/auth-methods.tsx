import { Link } from '@tanstack/react-router'
import type { Dispatch, SetStateAction } from 'react'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { useI18n } from '@/hooks/use-i18n'

export function AuthMethods({
  setMethod,
}: {
  setMethod: Dispatch<SetStateAction<'select' | 'email'>>
}) {
  const { t } = useI18n()

  return (
    <div className="flex flex-col gap-4 w-72 items-center">
      <div>
        <Label className="text-lg font-semibold">{t('auth.title')}</Label>
      </div>
      <Button
        type="button"
        size="lg"
        className="w-full"
        onClick={() => setMethod('email')}
      >
        {t('auth.methods.email')}
      </Button>

      <div className="flex items-center gap-1">
        <Label className="text-muted-foreground font-normal text-sm">
          {t('auth.signup.label')}
        </Label>
        <Link
          to="/login"
          className="text-white/90 hover:text-white hover:underline font-normal text-sm"
        >
          {t('auth.signup.button')}
        </Link>
      </div>
    </div>
  )
}
