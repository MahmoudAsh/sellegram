import { clsx } from 'clsx'

export function TabGroup({ children, className, ...props }) {
  return (
    <div className={clsx('w-full', className)} {...props}>
      {children}
    </div>
  )
}

export function TabList({ children, className, ...props }) {
  return (
    <div className={clsx('border-b border-gray-200 dark:border-gray-700', className)} {...props}>
      <nav className="-mb-px flex space-x-8" aria-label="Tabs">
        {children}
      </nav>
    </div>
  )
}

export function Tab({ children, active = false, onClick, className, ...props }) {
  return (
    <button
      className={clsx(
        'group inline-flex items-center border-b-2 py-4 px-1 text-sm font-medium transition-all',
        'focus:outline-none',
        active
          ? 'border-blue-500 text-blue-600 dark:text-blue-400'
          : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
      )}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
}

export function TabPanels({ children, className, ...props }) {
  return (
    <div className={clsx('mt-6', className)} {...props}>
      {children}
    </div>
  )
}

export function TabPanel({ children, active = false, className, ...props }) {
  if (!active) return null
  
  return (
    <div className={className} {...props}>
      {children}
    </div>
  )
} 