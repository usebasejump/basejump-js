"use client";

import {createClient} from "../utils/create-client.ts";
import {useAccountBySlug as useAccountBySlugReact} from "@usebasejump/react";
import {SWRConfiguration} from "swr";

export const useAccountBySlug = (slug: string, options?: SWRConfiguration) => {
    const supabaseClient = createClient();
    return useAccountBySlugReact(supabaseClient, slug, options);
}