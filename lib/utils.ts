import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function calculateAge(birthDateStr: string = '2002-12-14'): number {
  const today = new Date()
  const [year, month, day] = birthDateStr.split('-').map(Number)
  const birth = new Date(year, (month || 1) - 1, day || 1)
  let age = today.getFullYear() - birth.getFullYear()
  const monthDiff = today.getMonth() - birth.getMonth()
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--
  }
  return age
}

export function getCurrentYear(): number {
  return new Date().getFullYear()
}

