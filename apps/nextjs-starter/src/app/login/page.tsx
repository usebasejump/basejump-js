import Link from 'next/link'
import {cookies, headers} from 'next/headers'
import {createClient} from '@/utils/supabase/server.ts'
import {redirect} from 'next/navigation'
import {Button} from "@/components/ui/button.tsx";
import {Input} from "@/components/ui/input.tsx";
import {Label} from "@/components/ui/label.tsx";
import {Alert} from "@/components/ui/alert.tsx";

export default function Login({
                                  searchParams,
                              }: {
    searchParams: { message: string }
}) {
    const signIn = async (formData: FormData) => {
        'use server'

        const email = formData.get('email') as string
        const password = formData.get('password') as string
        const cookieStore = cookies()
        const supabase = createClient(cookieStore)

        const {error} = await supabase.auth.signInWithPassword({
            email,
            password,
        })

        if (error) {
            return redirect('/login?message=Could not authenticate user')
        }

        return redirect('/')
    }

    const signUp = async (formData: FormData) => {
        'use server'

        const origin = headers().get('origin')
        const email = formData.get('email') as string
        const password = formData.get('password') as string
        const cookieStore = cookies()
        const supabase = createClient(cookieStore)

        const {error} = await supabase.auth.signUp({
            email,
            password,
            options: {
                emailRedirectTo: `${origin}/auth/callback`,
            },
        })

        if (error) {
            return redirect('/login?message=Could not authenticate user')
        }

        return redirect('/dashboard')
    }

    return (
        <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2">
            <Link
                href="/"
                className="absolute left-8 top-8 py-2 px-4 rounded-md no-underline text-foreground bg-btn-background hover:bg-btn-background-hover flex items-center group text-sm"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1"
                >
                    <polyline points="15 18 9 12 15 6"/>
                </svg>
                {' '}
                Back
            </Link>

            <form
                className="animate-in flex-1 flex flex-col w-full justify-center gap-4 text-foreground"
                action={signIn}
            >
                <div className="flex flex-col gap-2">
                    <Label htmlFor="email">
                        Email
                    </Label>
                    <Input
                        name="email"
                        placeholder="you@example.com"
                        required
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <Label htmlFor="password">
                        Password
                    </Label>
                    <Input type="password" name="password" placeholder="••••••••" required/>
                </div>
                {searchParams?.message && (
                    <Alert variant="destructive">
                        {searchParams.message}
                    </Alert>
                )}
                <div className="flex flex-col gap-2">
                    <Button formAction={signIn}>Sign In</Button>
                    <Button formAction={signUp} variant="outline">Sign Up</Button>
                </div>
            </form>
        </div>
    )
}
