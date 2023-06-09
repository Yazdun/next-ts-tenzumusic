import { FiSun } from 'react-icons/fi'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { RiMoonCloudyLine } from 'react-icons/ri'
import { ImSpinner8 } from 'react-icons/im'
import { AnimatePresence, motion } from 'framer-motion'

const framer_theme = {
  initial: { y: 25 },
  animate: { y: 0 },
  exit: { y: -25 },
}

export const ThemeToggle: React.FC = () => {
  const [mounted, setMounted] = useState<Boolean>(false)
  const { theme, setTheme } = useTheme()
  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light')
  const dark_system_theme =
    theme === 'system' &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  const isDark = theme === 'dark' || dark_system_theme

  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return (
      <div className="flex items-center justify-between p-2 border-2 rounded-md dark:border-gray-600">
        <ImSpinner8 className="text-[1.2rem] animate-spin" />
      </div>
    )
  }

  return (
    <button
      data-testid="theme-toggle"
      className="flex items-center justify-between p-2 overflow-hidden border-2 rounded-md dark:border-gray-600"
      onClick={toggleTheme}
    >
      <AnimatePresence mode="wait" initial={false}>
        <div className="sr-only">
          {isDark ? 'activate light mode' : 'activate dark mode'}
        </div>
        <motion.span {...framer_theme} className="flex" key={theme}>
          {isDark ? (
            <RiMoonCloudyLine className="text-[1.2rem]" />
          ) : (
            <FiSun className="text-[1.2rem]" />
          )}
        </motion.span>
      </AnimatePresence>
    </button>
  )
}
