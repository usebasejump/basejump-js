"use client";

import {createClient} from "../utils/create-client";
import {useAccountMembers as useAccountMembersReact} from "@usebasejump/react";
import {SWRConfiguration} from "swr";

export const useAccountMembers = (accountId: string, options?: SWRConfiguration) => {
    const supabaseClient = createClient();
    return useAccountMembersReact(supabaseClient, accountId, options);
}