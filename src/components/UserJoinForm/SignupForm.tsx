'use client'
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const SignUpSchema = z.object({
    username: z.string().min(2, {
        message: "Username must be at least 2 characters long"
    }).max(30, {
        message: "Username can be only 30 characters long"
    }),

    email: z.string().email(),

    password: z.string().min(8, {
        message: "Password must be at least 8 characters long"
    }).max(14, {
        message: "Password can be only 14 characters long"
    })
})

export function SignUpForm() {
    const form = useForm<z.infer<typeof SignUpSchema>>({
        resolver: zodResolver(SignUpSchema),
        defaultValues: {
            username: "",
            email: "",
            password: "",
        }
    })

    function onSubmit(values: z.infer<typeof SignUpSchema>) {
        console.log(values)
    }

    return (
        <Form {...form}>
            <div className='flex flex-col text-center mb-4'>
                <h1 className='text-[1.6rem] font-semibold'>
                    Create an Account
                </h1>
                <p className='text-muted-foreground max-w-[300px]'>
                    Create a Postre Account using your email and password
                </p>
            </div>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 min-w-[300px]">
                <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Username</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter Your Username" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter Your Email" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter Your Password" {...field} type='password' />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button
                    type="submit"
                    className='w-full'
                >
                    Sign Up
                </Button>
            </form>
        </Form>
    )

}

