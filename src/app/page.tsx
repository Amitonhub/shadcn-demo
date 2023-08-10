'use client'
import {useLayoutEffect } from 'react'
import { ModeToggle } from '@/components/ModeToggle'
import UserAuthForm from '@/components/UserAuthForm'
import { useRouter } from 'next/navigation'
import { useGlobalContext } from './context/store'

export default function LoginPage() {
  const { username, isLogin, setIsLogin, setUsername } = useGlobalContext()
  const router = useRouter()
  useLayoutEffect(()=> {
    if(isLogin){
      router.push('/home')
    }else{
      router.push('/')
    }
  }, [isLogin, router])
  return (
    <>
      <div>
        <div className='m-3 flex justify-end'>
          <ModeToggle />
        </div>
        <div className='m-24 flex flex-col justify-center items-center'>
          <div className='flex flex-col space-y-2 text-center mb-8'>
            <h1 className='text-2xl font-semibold tracking-tight'>
              Login To Your Account
            </h1>
            <p className='text-sm text-muted-foreground'>
              Enter your username below to login to your account
            </p>
          </div>
          <UserAuthForm />
        </div>
      </div>
    </>
  )
}
