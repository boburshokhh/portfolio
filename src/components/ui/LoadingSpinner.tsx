'use client'

import { Terminal } from 'lucide-react'

interface LoadingSpinnerProps {
  message?: string
  className?: string
}

export function LoadingSpinner({ message = 'Загрузка...', className = '' }: LoadingSpinnerProps) {
  return (
    <div className={`min-h-screen bg-background flex items-center justify-center ${className}`}>
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
          <Terminal className="w-8 h-8 text-primary animate-pulse" />
        </div>
        <p className="text-muted-foreground font-mono">{message}</p>
      </div>
    </div>
  )
} 