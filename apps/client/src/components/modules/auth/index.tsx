import { AnimatePresence, motion } from 'motion/react'
import { useState } from 'react'
import { Logo } from '@/components/ui/logo'
import { AuthMethods } from './auth-methods'
import { AuthWithEmail } from './auth-with-email'

export default function Auth() {
  const [loginMethod, setLoginMethod] = useState<'select' | 'email'>('select')

  return (
    <div className="flex flex-col flex-1 w-full min-h-screen items-center justify-center gap-8 bg-linear-to-b from-card to-background">
      <div className="flex flex-col gap-8 h-82 items-center justify-start">
        <Logo className="size-14 fill-white" />
        <AnimatePresence mode="popLayout">
          {loginMethod === 'select' ? (
            <motion.div
              key="select"
              initial={{ opacity: 0, scale: 0, filter: 'blur(20px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, scale: 0, filter: 'blur(20px)' }}
              transition={{
                duration: 0.5,
                scale: { type: 'spring', visualDuration: 0.5, bounce: 0.3 },
                filter: { duration: 0.5 },
              }}
            >
              <AuthMethods setMethod={setLoginMethod} />
            </motion.div>
          ) : (
            <motion.div
              key="email"
              initial={{ opacity: 0, scale: 0, filter: 'blur(20px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, scale: 0, filter: 'blur(20px)' }}
              transition={{
                duration: 0.5,
                scale: { type: 'spring', visualDuration: 0.5, bounce: 0.3 },
                filter: { duration: 0.5 },
              }}
            >
              <AuthWithEmail setMethod={setLoginMethod} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
