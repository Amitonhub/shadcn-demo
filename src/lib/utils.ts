import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Set item in local storage
export const setItem = (key: string, value: any): void => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

// Get item from local storage
export const getItem = <T>(key: string): T | null => {
  if (typeof window !== 'undefined') {
  const item = localStorage.getItem(key);
    if (item) {
      return JSON.parse(item) as T;
    }
  }
    return null;
};

// Remove item from local storage
export const removeItem = (key: string): void => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(key);
  }

};

// Clear all items from local storage
export const clear = (): void => {
  if (typeof window !== 'undefined') {
    localStorage.clear();
  }
};