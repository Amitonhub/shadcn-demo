"use client"
import React, { useState } from "react";
import * as z from "zod"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation";
import { useGlobalContext } from "@/app/context/store";
import { SUBMIT } from '../constants'
import Loader from "./Loader";
import { toast } from "./ui/use-toast";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }).max(50, {
    message: "Username must be at less than 50 characters.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }).max(50, {
    message: "Password must be at less than 50 characters.",
  }),
})

function UserAuthForm() {
  const { setIsLogin, setUsername } = useGlobalContext()
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: ""
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true)
    setTimeout(() => {
      setUsername(values.username)
      setIsLogin(true)
      toast({
        variant: "default",
        title: "Logged in successful",
        description: `${new Date()}`,
        duration: 2000
      })
      console.log(values)
      router.push('/home')
    })
  }
  return <>
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="username" {...field} disabled={isLoading} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="w-80">
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="********" {...field} disabled={isLoading} />
              </FormControl>
              <FormDescription>
                Please enter your password.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-center">
          <Button type="submit">
            {isLoading ?
              <Loader /> :
              <>
                {SUBMIT}
              </>
            }
          </Button>
        </div>
      </form>
    </Form>
  </>;
}

export default UserAuthForm;
