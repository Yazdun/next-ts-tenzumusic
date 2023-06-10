import { Navigation } from '@/components'
import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'

export const framer_page = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.3 },
}

export const Layout = (props: { children: React.ReactNode }) => {
  const router = useRouter()
  return (
    <>
      <Navigation />
      <AnimatePresence initial={false} mode="wait">
        <motion.main {...framer_page} key={router.pathname}>
          {props.children}
        </motion.main>
      </AnimatePresence>
    </>
  )
}
