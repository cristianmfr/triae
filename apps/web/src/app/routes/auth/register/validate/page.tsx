import { AnimatePresence, motion } from 'motion/react'
import { AuthRegister } from '@/components/modules/auth/auth-register'

export default function SignUp() {
  return (
    <div className="flex flex-col flex-1 w-full min-h-screen items-center justify-center gap-8 bg-linear-to-b from-card to-background">
      <div className="flex flex-col gap-8 items-center justify-start">
        <AnimatePresence mode="popLayout">
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
            <AuthRegister />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
