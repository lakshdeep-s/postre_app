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

const LoginSchema = z.object({
    email: z.string().email(),

    password: z.string().min(8, {
        message: "Password must be at least 8 characters long"
    }).max(14, {
        message: "Password can be only 14 characters long"
    })
})

export function LoginForm() {
    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: "",
        }
    })

    function onSubmit(values: z.infer<typeof LoginSchema>) {
        console.log(values)
    }

    return (
        <Form {...form}>
            <div className='flex flex-col text-center mb-4'>
                <h1 className='text-[1.6rem] font-semibold'>
                    Login to your Account
                </h1>
                <p className='text-muted-foreground max-w-[300px]'>
                    Login to your account using your registered email
                </p>
            </div>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 min-w-[300px]">
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
                    Login
                </Button>
            </form>
        </Form>
    )

}

