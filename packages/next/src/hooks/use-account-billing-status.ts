"use client";

import {createClient} from "../utils/create-client";
import {useAccountBillingStatus as useAccountBillingStatusReact} from "@usebasejump/react";
import {SWRConfiguration} from "swr";

export const useAccountBillingStatus = (accountId: string, options?: SWRConfiguration) => {
    const supabaseClient = createClient();
    return useAccountBillingStatusReact(supabaseClient, accountId, options);
}