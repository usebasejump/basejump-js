"use client";

import {createClient} from "../utils/create-client.ts";
import {useAccount as useAccountReact} from "@usebasejump/react";
import {SWRConfiguration} from "swr";

export const useAccount = (accountId: string, options?: SWRConfiguration) => {
    const supabaseClient = createClient();
    return useAccountReact(supabaseClient, accountId, options);
}