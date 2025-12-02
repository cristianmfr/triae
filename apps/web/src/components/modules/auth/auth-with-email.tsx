'use client'

import type { Dispatch, SetStateAction } from 'react'
import { SignInForm } from '@/components/forms/sign-in-form'
import { Label } from '@/components/ui/label'
import { useI18n } from '@/locale/client'

export function AuthWithEmail({
  setMethod,
}: {
  setMethod: Dispatch<SetStateAction<'select' | 'email'>>
}) {
  const t = useI18n()

  return (
    <div className="flex flex-col gap-4 w-68 items-center">
      <div>
        <Label className="text-[16px] font-semibold">
          {t('auth.methods.email.title')}
        </Label>
      </div>
      <SignInForm />
      <div className="flex items-center gap-1">
        <button
          type="button"
          onClick={() => setMethod('select')}
          className="cursor-pointer text-muted-foreground hover:text-white hover:underline font-normal text-sm"
        >
          {t('auth.methods.email.back')}
        </button>
      </div>
    </div>
  )
}
