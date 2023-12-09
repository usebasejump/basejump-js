"use client"

import {zodResolver} from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"
import * as z from "zod"

import {Button} from "@/components/ui/button"
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage,} from "@/components/ui/form"
import {Input} from "@/components/ui/input"
import {CreateAccountResponse} from "@usebasejump/next";
import {createClient} from "@/utils/supabase/client.ts";

const FormSchema = z.object({
    slug: z.string().min(2, {
        message: "Account slug must be at least 2 characters.",
    }),
    name: z.string().min(2, {
        message: "Account name must be at least 2 characters.",
    })
})

interface Props {
    afterCreate?: (account: CreateAccountResponse) => void;
}

export default function NewTeamForm({afterCreate}: Props) {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            slug: "",
            name: "",
        },
    });

    const supabaseClient = createClient();

    async function onSubmit(data: z.infer<typeof FormSchema>) {
        const {data: newTeam, error} = await supabaseClient.rpc("create_account", {
            name: data.name,
            slug: data.slug,
        });

        if (error) {
            form.setError("slug", {
                type: "custom",
                message: error.message,
            });
            return;
        }

        if (afterCreate) {
            afterCreate(newTeam);
        }

        form.reset();
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                    control={form.control}
                    name="name"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Team Name</FormLabel>
                            <FormControl>
                                <Input placeholder="My Team" {...field} />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="slug"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Unique identifier</FormLabel>
                            <div className="flex items-center space-x-2">
                                <span className="text-sm leading-none">
                                    https://usebasejump.com/
                                </span>
                                <FormControl>
                                    <Input placeholder="my-team" {...field} />
                                </FormControl>
                            </div>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <Button type="submit" disabled={form.formState.isSubmitting}>{form.formState.isSubmitting ? "Creating..." : "Create Team"}</Button>
            </form>
        </Form>
    )
}
