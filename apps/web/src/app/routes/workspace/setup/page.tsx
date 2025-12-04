import { AnimatePresence, motion } from 'motion/react'
import { SetupForm } from '@/components/forms/setup-form'
import { Label } from '@/components/ui/label'
import { Logo } from '@/components/ui/logo'
import { useI18n } from '@/hooks/use-i18n'

export default function Setup() {
  const { t } = useI18n()

  return (
    <div className="flex flex-col flex-1 w-full min-h-screen items-center justify-center gap-8 bg-linear-to-b from-card to-background">
      <div className="flex flex-col gap-8 h-114 items-center justify-start w-86">
        <Logo className="size-14 fill-white" />
        <div className="flex flex-col items-center justify-center gap-2">
          <Label className="text-xl font-semibold">{t('setup.title')}</Label>
          <Label className="text-sm font-normal text-muted-foreground text-center">
            {t('setup.subtitle')}
          </Label>
        </div>
        <AnimatePresence mode="popLayout">
          <motion.div
            key="select"
            initial={{ opacity: 0, scale: 0, filter: 'blur(20px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, scale: 0, filter: 'blur(20px)' }}
            className="w-full"
            transition={{
              duration: 0.5,
              scale: { type: 'spring', visualDuration: 0.5, bounce: 0.3 },
              filter: { duration: 0.5 },
            }}
          >
            <SetupForm />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
