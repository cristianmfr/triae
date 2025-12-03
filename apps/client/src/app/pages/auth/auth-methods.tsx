import type { Dispatch, SetStateAction } from 'react'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { useI18n } from '@/locale/client'

export function AuthMethods({
  setMethod,
}: {
  setMethod: Dispatch<SetStateAction<'select' | 'email'>>
}) {
  const t = useI18n()

  return (
    <div className="flex flex-col gap-4 w-62 items-center">
      <div>
        <Label className="text-[16px] font-semibold">{t('auth.title')}</Label>
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
          {t('auth.methods.email')}
        </Label>
        {/* <Link
          href="/login"
          className="text-white hover:underline transition ease-in text-sm"
        >
          {t('auth.forgot.link')}
        </Link> */}
      </div>
    </div>
  )
}
