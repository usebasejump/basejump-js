"use client";

import {createClient} from "../utils/create-client.ts";
import {useAccounts as useAccountsReact} from "@usebasejump/react";
import {SWRConfiguration} from "swr";

export const useAccounts = (options?: SWRConfiguration) => {
    const supabaseClient = createClient();
    return useAccountsReact(supabaseClient, options);
}