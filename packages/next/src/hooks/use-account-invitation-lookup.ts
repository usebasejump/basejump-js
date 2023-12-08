"use client";

import {createClient} from "../utils/create-client.ts";
import {useAccountInvitationLookup as useAccountInvitationLookupReact} from "@usebasejump/react";
import {SWRConfiguration} from "swr";

export const useAccountInvitationLookup = (token: string, options?: SWRConfiguration) => {
    const supabaseClient = createClient();
    return useAccountInvitationLookupReact(supabaseClient, token, options);
}