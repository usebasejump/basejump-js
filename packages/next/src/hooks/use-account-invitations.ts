"use client";

import {createClient} from "../utils/create-client.ts";
import {useAccountInvitations as useAccountInvitationsReact} from "@usebasejump/react";
import {SWRConfiguration} from "swr";

export const useAccountInvitations = (accountId: string, options?: SWRConfiguration) => {
    const supabaseClient = createClient();
    return useAccountInvitationsReact(supabaseClient, accountId, options);
}