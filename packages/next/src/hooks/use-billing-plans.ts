"use client";

import {createClient} from "../utils/create-client";
import {useBillingPlans as useBillingPlansReact} from "@usebasejump/react";
import {SWRConfiguration} from "swr";

export const useBillingPlans = (accountId: string, options?: SWRConfiguration) => {
    const supabaseClient = createClient();
    return useBillingPlansReact(supabaseClient, accountId, options);
}